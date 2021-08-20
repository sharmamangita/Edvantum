require('dotenv').config()
const ConcessionSchema = require('../../../database/models/ConcessionModel').concession

class ConcessionController {

    async createConcession(req, res) {
        var {concessionType, concessionPercent, concessionAmount } = req.body;
        console.log(req.body, 'user details11');
        if(!concessionType && !concessionPercent && !concessionAmount)
            return res.send({
                success: false,
                msg: 'All fields are required'
            });
        try{
            let  concession = new ConcessionSchema({
                concessionType,
                concessionPercent,
                concessionAmount
            });
            concession.save()
            return res.send({
                success: true,
                msg: 'Record inserted successfully',
                data: concession
            })
        } catch (err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }
    async updateConcession(req, res) {
        var {_id, concessionType, concessionPercent, concessionAmount } = req.body;
        if(!concessionType && !concessionPercent && !concessionAmount)
            return res.send({
                success: false,
                msg: 'All fields are required'
            });
        try{
            let  c = {
                concessionType,
                concessionPercent,
                concessionAmount
            }
            let updatedData = await ConcessionSchema.findByIdAndUpdate(_id, { $set: c }, { new: true });
            return res.send({
                success: true,
                msg: "Record Updated",
                data: updatedData,
            });
        } catch (err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }
    async deleteConcession(req, res) {
        try{
            if (!req.body.id)
                return res.send({ success: false, msg: "Concession Id not provided." });
            let checkConcession = await ConcessionSchema.findOne({
                _id: req.body.id,
            });
            if (!checkConcession)
                return res.send({ success: false, msg: "No Concession with this Id." });
            await ConcessionSchema.remove({ _id: req.body.id });
            res.send({ success: true, msg: "Deleted Successfully." });
        } catch (err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }
    async getConcessions(req, res) {
        try{
            let data = await ConcessionSchema.find({ });
            res.send({ success: true, msg: "", data: data});
        } catch (err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }
    async getConcession(req, res) {
        try{
            if (!req.params.id)
                return res.send({ success: false, msg: "Concession Id not provided." });
            let checkConcession = await ConcessionSchema.findOne({
                _id: req.params.id,
            });
            if (!checkConcession)
                return res.send({ success: false, msg: "No Concession with this Id." });
            else{
                return res.send({ success: true, msg: "", data: checkConcession });
            }
        } catch (err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }

}

module.exports = new ConcessionController()