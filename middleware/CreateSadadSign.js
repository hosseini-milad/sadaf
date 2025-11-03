const crypto = require('crypto');
const {SADAD_SHABA,SADAD_SHENASE,SADAD_PAZIRANDE,SADAD_TERMINAL,
    SADAD_KEY,RETURN_URL} = process.env


async function CreateSadadSign(orderNo,price) {
    var keyHex = Buffer.from(SADAD_KEY,'base64')
    var key24 = keyHex.slice(0,24)
    console.log(key24)
    const cipher = crypto.createCipheriv('des-ede3', key24, ''); // IV is not used in ECB
    let encrypted = cipher.update(`${SADAD_TERMINAL};${orderNo};${price}`);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
        
        const query ={
        "TerminalId" : SADAD_TERMINAL,
        "MerchantId" : SADAD_PAZIRANDE,
        "Amount" : price,
        "SignData" : encrypted.toString('base64'),
        "ReturnUrl" : RETURN_URL,
        "OrderId" : orderNo,
        "MultiIdentityData":{
            MultiIdentityRows:[{
                IbanNumber:SADAD_SHABA,
                Amount:price,
                PaymentIdentity:SADAD_SHENASE
            }]
        }
        }
        return query
}
module.exports =CreateSadadSign