const Router = require('express').Router
const router = new Router()

const middleware = require('../middleware/index');

const auth = require('./routes/authRoutes');
const concession = require('./routes/concessionRoutes');
const category = require('./routes/categoryRoutes');
const subject = require('./routes/subjectRoutes');
const classes = require('./routes/classRoutes');
const holiday = require('./routes/holidayRoutes');

router.route('/').get((req, res) => {
    res.json({ message: 'Enovle management API'})
})

// api router

router.use('/auth', auth);
router.use('/api/schooladmin',concession);
router.use('/api/schooladmin',category);
router.use('/api/schooladmin',subject);
router.use('/api/schooladmin',classes);
router.use('/api/schooladmin', holiday);

module.exports = router