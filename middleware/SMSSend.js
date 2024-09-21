const { default: fetch } = require("node-fetch");
const {SMS_URL,FROM_SMS,USER_SMS,PASS_SMS} = process.env

async function SMSSend(phone,message) {
    var sendUrl = `${SMS_URL}?from=${FROM_SMS}&to=${phone}&username=`+
    `${USER_SMS}&password=${PASS_SMS}&message=${message}`
    response = await fetch(sendUrl,
      {method: 'GET' , 
      headers:{"Content-Type":"application/json"}});
    const result = await response.json();
    return(1)
}
module.exports =SMSSend