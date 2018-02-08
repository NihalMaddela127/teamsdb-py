const express = require('express');
const router = express.Router();
const dbservice = require('../service/dbservice');

router.get('/', dbservice.getData);

module.exports = router;
