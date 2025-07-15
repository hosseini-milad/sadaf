const express = require('express');
const router = express.Router();
const zibal = require('../middleware/zibal');
const sadad = require('../middleware/Sadad');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const crypto = require('crypto');
const {SADAD_URL,SADAD_PAZIRANDE,SADAD_TERMINAL,SADAD_KEY,RETURN_URL} = process.env

//payment
router.get('/zibal', zibal.pay);
router.get('/sadad', sadad.pay);
router.get('/reserve-pay', sadad.Reserve);
router.get('/gateway', sadad.gateway);
router.get('/test/:credit',(req, res) => {
    res.render('index.ejs');
});
router.get('/callback', sadad.callBack);
router.post('/enc',jsonParser, async (req,res)=>{
    var sign = ""
    const cipher = crypto.createCipheriv('aes-256-ecb', SADAD_KEY, ''); // IV is not used in ECB

    // Update the cipher with the plaintext.
    // Ensure plaintext length is a multiple of 8 bytes (DES block size) for NoPadding.
    // If not, you'll need to handle padding manually based on your PKCS#0 definition.
    let encrypted = cipher.update(`${SADAD_TERMINAL};${"R123"};123000`);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    
    const query ={
	  "TerminalId" : SADAD_TERMINAL,
    "MerchantId" : SADAD_PAZIRANDE,
    "Amount" : 123000,
    "SignData" : encrypted.toString('base64'),
    "ReturnUrl" : "https://test.qomstp.ir",
    "OrderId" : "R123"
    }
    return res.json(query)

})



module.exports = router;