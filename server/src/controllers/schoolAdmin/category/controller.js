require('dotenv').config()
const CategorySchema = require('../../../database/models/CategoryModel').category

class CategoryController {

    async createCategory(req, res) {
        var {categoryName} = req.body;
				console.log('data',categoryName);
        if(!categoryName)
            return res.send({
                success: false,
                msg: 'All fields are required'
            });
        try{
            let  category = new CategorySchema({
                categoryName
            });
            category.save()
            return res.send({
                success: true,
                msg: 'Record inserted successfully',
                data: category
            })
        } catch (err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }
    async updateCategory(req, res) {
        var {_id, categoryName} = req.body;
        if(!categoryName)
            return res.send({
                success: false,
                msg: 'All fields are required'
            });
        try{
            let  c = {
                categoryName
            }
            let updatedData = await CategorySchema.findByIdAndUpdate(_id, { $set: c }, { new: true });
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
    async deleteCategory(req, res) {
        try{
            if (!req.body._id)
                return res.send({ success: false, msg: "Category Id not provided." });
            let checkCategory = await CategorySchema.findOne({
                _id: req.body._id,
            });
            if (!checkCategory)
                return res.send({ success: false, msg: "No Category with this Id." });
            await CategorySchema.remove({ _id: req.body._id });
            res.send({ success: true, msg: "Deleted Successfully." });
        } catch (err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }
    async getCategories(req, res) {
        try{
            let data = await CategorySchema.find({ });
            res.send({ success: true, msg: "", data: data});
        } catch (err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }
    async getCategory(req, res) {
        try{
            if (!req.params.id)
                return res.send({ success: false, msg: "Category Id not provided." });
            let checkCategory = await CategorySchema.findOne({
                _id: req.params.id,
            });
            if (!checkCategory)
                return res.send({ success: false, msg: "No Category with this Id." });
            else{
                return res.send({ success: true, msg: "", data: checkCategory });
            }
        } catch (err){
            return res.send({
                success: false,
                msg: err
            })
        }
    }

}

module.exports = new CategoryController()