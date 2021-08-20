require('dotenv').config()
const ClassSchema = require('../../../database/models/ClassModel').class

class ClassController {

    async createClass(req, res) {
        var {className, section} = req.body;
				console.log('data',className, '-',section);
        if(!className || !section)
            return res.send({
                success: false,
                msg: 'All fields are required'
            });
        try{
            let  classData = new ClassSchema({
                className,
				section
            });
            classData.save()
            return res.send({
                success: true,
                msg: 'Record inserted successfully',
                data: classData
            })
        } catch (err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }


    async updateClass(req, res) {
        var {_id, className, section} = req.body;
        console.log(req.body)
        if(!_id || !className || !section)
            return res.send({
                success: false,
                msg: 'All fields are required'
            });
        
        try{
            let  c = {
                className,
				section
            }
            let updatedData = await ClassSchema.findByIdAndUpdate(_id, { $set: c }, { new: true });
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

    async updateSubjectList(req, res) {
        var { className, subjectId, add } = req.body; 
        console.log(req.body);
        let updateList;
        if(!className || !subjectId){
            return res.send({
                success: false,
                msg: 'All fields are required'
            });
        }
        try {
            updateList = await ClassSchema.updateMany({className}, { $set: {subjectName: subjectId}})
            return res.send({
                success: true,
                msg: "list is updated",
                data: updateList
            })
        } catch(err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }
    
    async deleteClass(req, res) {
        try{
            if (!req.body._id)
                return res.send({ success: false, msg: "Class Id not provided." });
            let checkClass = await ClassSchema.findOne({
                _id: req.body._id,
            });
            if (!checkClass)
                return res.send({ success: false, msg: "No Class with this Id." });
            await ClassSchema.remove({ _id: req.body._id });
            res.send({ success: true, msg: "Deleted Successfully." });
        } catch (err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }
    async getClasses(req, res) {
        try{
            let data = await ClassSchema.find().populate("subjectName");
            res.send({ success: true, msg: "", data: data});
        } catch (err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }
    async getClass(req, res) {
        try{
            if (!req.params.id)
                return res.send({ success: false, msg: "Class Id not provided." });
            let checkClass = await ClassSchema.findOne({
                _id: req.params.id,
            });
            if (!checkClass)
                return res.send({ success: false, msg: "No Class with this Id." });
            else{
                return res.send({ success: true, msg: "", data: checkClass });
            }
        } catch (err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }

}

module.exports = new ClassController()