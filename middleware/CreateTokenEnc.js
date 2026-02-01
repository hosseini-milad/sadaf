const crypto = require('crypto');
const {SADAD_SHABA,SADAD_SHENASE,SADAD_PAZIRANDE,SADAD_TERMINAL,
    SADAD_KEY,RETURN_URL} = process.env


async function CreateTokenEnc(token) {
    if(!token) return('')
    var keyHex = Buffer.from(SADAD_KEY,'base64')
    var key24 = keyHex.slice(0,24)
    console.log(key24)
    const cipher = crypto.createCipheriv('des-ede3', key24, ''); // IV is not used in ECB
    let encrypted = cipher.update(`${token}`);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return(encrypted.toString('base64'))
    
}
module.exports =CreateTokenEnc