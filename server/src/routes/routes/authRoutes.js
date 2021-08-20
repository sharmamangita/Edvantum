const controller = require('../../controllers/auth/controller');
const Router = require('express').Router;
const router = new Router();

router.route('/createuser')
    .post((...args) => controller.createUser(...args))
router.route('/login')
    .post((...args) => controller.authenticate(...args))

module.exports = router;