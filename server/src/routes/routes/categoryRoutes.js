const controller = require('../../controllers/schoolAdmin/category/controller');
const Router = require('express').Router;
const router = new Router();

router.route('/createcategory')
    .post((...args) => controller.createCategory(...args))

router.route('/updatecategory')
    .post((...args) => controller.updateCategory(...args))

router.route('/deletecategory')
    .post((...args) => controller.deleteCategory(...args))

router.route('/getcategories')
    .get((...args) => controller.getCategories(...args))

router.route('/getcategory/:id')
    .get((...args) => controller.getCategory(...args))

module.exports = router;