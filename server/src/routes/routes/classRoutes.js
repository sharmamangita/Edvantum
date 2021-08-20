const controller = require('../../controllers/schoolAdmin/class/controller');
const Router = require('express').Router;
const router = new Router();

router.route('/createclass')
    .post((...args) => controller.createClass(...args))
		
router.route('/updateclass')
    .post((...args) => controller.updateClass(...args))

router.route('/updatesubjectlist')
    .post((...args) => controller.updateSubjectList(...args))

router.route('/deleteclass')
    .post((...args) => controller.deleteClass(...args))

router.route('/getclasses')
    .get((...args) => controller.getClasses(...args))

router.route('/getclass/:id')
    .get((...args) => controller.getClass(...args))

module.exports = router;