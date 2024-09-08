const express = require('express');
const router = express.Router();
const zibal = require('../middleware/zibal');

//payment
router.get('/zibal', zibal.pay);
router.get('/test/:credit',(req, res) => {
    res.render('index.ejs');
});
router.get('/callback', zibal.callBack);



module.exports = router;