const express = require("express");

const router = express.Router();

router.get('/houselist');
router.post('/selectrent/:uid');
router.get('/renthouse/:uid');
router.delete('/deletehouse');

module.exports = router;
