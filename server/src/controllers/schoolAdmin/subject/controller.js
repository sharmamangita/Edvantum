require('dotenv').config()
const SubjectSchema = require('../../../database/models/SubjectModel').subject

class SubjectController {

    async createSubject(req, res) {
        var {subjectName} = req.body;
				console.log('data',subjectName);
        if(!subjectName)
            return res.send({
                success: false,
                msg: 'All fields are required'
            });
        try{
            let  subject = new SubjectSchema({
                subjectName
            });
            subject.save()
            return res.send({
                success: true,
                msg: 'Record inserted successfully',
                data: subject
            })
        } catch (err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }
    async updateSubject(req, res) {
        var {_id, subjectName} = req.body;
        if(!subjectName)
            return res.send({
                success: false,
                msg: 'All fields are required'
            });
        try{
            let  c = {
                subjectName
            }
            let updatedData = await SubjectSchema.findByIdAndUpdate(_id, { $set: c }, { new: true });
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
    async deleteSubject(req, res) {
        try{
            if (!req.body._id)
                return res.send({ success: false, msg: "Subject Id not provided." });
            let checkSubject = await SubjectSchema.findOne({
                _id: req.body._id,
            });
            if (!checkSubject)
                return res.send({ success: false, msg: "No Subject with this Id." });
            await SubjectSchema.remove({ _id: req.body._id });
            res.send({ success: true, msg: "Deleted Successfully." });
        } catch (err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }
    async getSubjects(req, res) {
        try{
            let data = await SubjectSchema.find({ });
            res.send({ success: true, msg: "", data: data});
        } catch (err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }
    async getSubject(req, res) {
        try{
            if (!req.params.id)
                return res.send({ success: false, msg: "Subject Id not provided." });
            let checkSubject = await SubjectSchema.findOne({
                _id: req.params.id,
            });
            if (!checkSubject)
                return res.send({ success: false, msg: "No Subject with this Id." });
            else{
                return res.send({ success: true, msg: "", data: checkSubject });
            }
        } catch (err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }

}

module.exports = new SubjectController()