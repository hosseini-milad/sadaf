
async function CanReserve(userData) {
    if(!userData){
      return(0)
    }
    if(userData.cName&&userData.sName&&userData.meliCode){
      return(1)
    }
    
    return(0)
}
module.exports =CanReserve