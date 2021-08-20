const controller = require('../../controllers/schoolAdmin/concession/controller');
const Router = require('express').Router;
const router = new Router();

router.route('/createconcession')
    .post((...args) => controller.createConcession(...args))

router.route('/updateconcession')
    .post((...args) => controller.updateConcession(...args))

router.route('/deleteconcession')
    .post((...args) => controller.deleteConcession(...args))

router.route('/getconcessions')
    .get((...args) => controller.getConcessions(...args))

router.route('/getconcession/:id')
    .get((...args) => controller.getConcession(...args))

module.exports = router;