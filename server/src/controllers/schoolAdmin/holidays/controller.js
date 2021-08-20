require('dotenv').config()
const HolidaySchema = require('../../../database/models/HolidayModel').holidays

class ConcessionController {

    async createHoliday(req, res) {
        var {festival, dateFrom, dateTo } = req.body;
        console.log(req.body, 'user details11');
        if(!festival && !dateFrom && !dateTo)
            return res.send({
                success: false,
                msg: 'All fields are required'
            });
        try{
            let  addHoliday = new HolidaySchema({festival, dateFrom, dateTo });
            addHoliday.save()
            return res.send({
                success: true,
                msg: 'Record inserted successfully',
                data: addHoliday
            })
        } catch (err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }
    async updateHolidays(req, res) {
        var {_id, festival, dateFrom, dateTo } = req.body;
        if(!festival && !dateFrom && !dateTo)
            return res.send({
                success: false,
                msg: 'All fields are required'
            });
        try{
            let  c = {festival, dateFrom, dateTo }
            let updatedData = await HolidaySchema.findByIdAndUpdate(_id, { $set: c }, { new: true });
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

    async deleteHolidays(req, res) {
        try{
            if (!req.body.id)
                return res.send({ success: false, msg: "Holiday Id not provided." });
            let checkHolidays = await HolidaySchema.findOne({
                _id: req.body.id,
            });
            if (!checkHolidays)
                return res.send({ success: false, msg: "No Holidays with this Id." });
                await HolidaySchema.remove({ _id: req.body.id });
                return res.send({ success: true, msg: "Deleted Successfully." });
        } catch (err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }

    async getHolidays(req, res) {
        try{
            let data = await HolidaySchema.find();
            res.send({ success: true, msg: "", data: data});
        } catch (err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }

    async activateHolidays(req, res){
        let {_id, activate} = req.body
        try{
            let updatedData = await HolidaySchema.findByIdAndUpdate(_id, { $set: {active: activate} }, { new: true });

            return res.send({
                success: true,
                msg: "holiday is updated successfully",
                data: updatedData
            })

        } catch(err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }

}

module.exports = new ConcessionController()