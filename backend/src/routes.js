const router = require('express').Router();
const empolyees = require('./modules/employees/routes');

router.use('/employees', empolyees);

module.exports = router;
