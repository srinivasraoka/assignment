const express = require('express');
const router = express.Router();
const {read} = require('../controllers/dynamicdata');


router.get('/get_meta_data/tradelicense/apply', read)

module.exports = router;