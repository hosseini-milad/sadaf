
const env={
    //siteApi:'http://localhost:2020/api',
    siteApi:'https://reserveadmin.qomstp.ir/api',
    
    //siteApiUrl:'http://localhost:2020',
    siteApiUrl:'https://reserveadmin.qomstp.ir/',
    cookieName:'sadaf-login',
    //cookieName:'panel-login',
    //cookieName:'mehr-login',
    
    cookieLang:'sadaf-lang',
    //cookieLang:'panel-lang',
    //cookieLang:'mehr-lang',

    srcUrl:"https://ipm.ssaa.ir/",
    loader:<img className="imgLoader" src="/img/loaderPanel.gif"/>,
    defaultUser:"/img/avatar/avatar_1.jpg",
    defaultProduct:"/img/avatar/defaultProduct.png",

}
export const searchUrl=(url,menu,setTab)=>{
    const tabString = url.split('#')
    if(!tabString) return('')
    if(tabString.length==2){
        var cTab = tabString[1]
        const cMenu = menu.find(item=>item.enTitle==cTab)
        setTab(cMenu&&cMenu.index)
        return(tabString[1])
    }
    
}


export default env
