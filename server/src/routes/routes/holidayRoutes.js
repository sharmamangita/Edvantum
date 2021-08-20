const controller = require('../../controllers/schoolAdmin/holidays/controller');
const Router = require('express').Router;
const router = new Router();

router.route('/createholiday')
    .post((...args) => controller.createHoliday(...args))

router.route('/updateholiday')
    .post((...args) => controller.updateHolidays(...args))

router.route('/deleteholiday')
    .post((...args) => controller.deleteHolidays(...args))

router.route('/getholidays')
    .get((...args) => controller.getHolidays(...args))

router.route('/activateholidays')
    .post((...args) => controller.activateHolidays(...args))


module.exports = router;