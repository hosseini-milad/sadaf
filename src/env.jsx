
const env={
    //siteApi:'http://localhost:2030/api',
    siteApi:'https://sadafadmin.sepehrai.ir/api',
    
    //siteApiUrl:'http://localhost:2030',
    siteApiUrl:'https://sadafadmin.sepehrai.ir',
    cookieName:'sadaf-login',
    //cookieName:'panel-login',
    //cookieName:'mehr-login',
    
    cookieLang:'sadaf-lang',
    //cookieLang:'panel-lang',
    //cookieLang:'mehr-lang',

    shopExpert:'sadaf-experience',
    tax: .1,
    loader:<img className="imgLoader" src="/img/loaderPanel.gif"/>,
    defaultUser:"/img/avatar/avatar_1.jpg",
    defaultProduct:"/img/avatar/defaultProduct.png",

    editorApi:'qosmvwu6wq395cpq7ay8ud8j9d21cf4cdgkxwmpz317vpy2i'
}
export const TAX=0.1
export const defPay=3
export function jalali_to_gregorian(jy, jm, jd) {
    var sal_a, gy, gm, gd, days;
    jy += 1595;
    days = -355668 + (365 * jy) + (~~(jy / 33) * 8) + ~~(((jy % 33) + 3) / 4) + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
    gy = 400 * ~~(days / 146097);
    days %= 146097;
    if (days > 36524) {
      gy += 100 * ~~(--days / 36524);
      days %= 36524;
      if (days >= 365) days++;
    }
    gy += 4 * ~~(days / 1461);
    days %= 1461;
    if (days > 365) {
      gy += ~~((days - 1) / 365);
      days = (days - 1) % 365;
    }
    gd = days + 1;
    sal_a = [0, 31, ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
    return [gy, gm, gd];
  }
export function normalPriceCount(priceText,count){
    if(!priceText||priceText === null||priceText === undefined) return("")

    try{priceText =priceText.split(' ')[0];}catch{}
    if(priceText === "0"||priceText === 0)return("-");
    var rawPrice = parseInt(priceText.toString().replace(/\D/g,''))*(count?count:1)
    //console.log(rawPrice,priceText)
    return(
        (rawPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").replace( /^\D+/g, ''))
    )
}


export default env
