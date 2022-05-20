const express = require("express");

const router = express.Router();

router.get('/house');
router.post('/house/:oid');
router.get('/renterlist/:oid');
router.delete('/deletehouse');

module.exports = router;