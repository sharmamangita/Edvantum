const controller = require('../../controllers/schoolAdmin/subject/controller');
const Router = require('express').Router;
const router = new Router();

router.route('/createsubject')
    .post((...args) => controller.createSubject(...args))

router.route('/updatesubject')
    .post((...args) => controller.updateSubject(...args))

router.route('/deletesubject')
    .post((...args) => controller.deleteSubject(...args))

router.route('/getsubjects')
    .get((...args) => controller.getSubjects(...args))

router.route('/getsubject/:id')
    .get((...args) => controller.getSubject(...args))

module.exports = router;