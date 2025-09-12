import { useState, useEffect} from "react"
import MyInput from "../../components/Button/Input"
import env from "../../env"
import ImageSimple from "../../components/Button/ImageSimple"
import ImageShow from "../../components/Button/ImageShow";

function ProfileBody(props){
    const [image,setImage]= useState();
    const [imageUrl,setImageUrl]= useState();
    const [changes,setChanges] = useState()
    const data = props.data
    const token = props.token
    const [error,setError] = useState('')
    console.log(error)
    useEffect(() => {
      const postOptions={
          method:'post',
          headers: {
              "content-type": "application/json"
          },
          body:JSON.stringify({base64image:image&&image.base64,
                              imgName:image&&image.fileName,
                            folderName:"user"})
      }//URL.createObjectURL(image)
      //console.log(postOptions)
      image&&fetch(env.siteApi+"/user/upload",postOptions)
          .then(res => res.json())
          .then(
          (result) => {
            setChanges(prevState => ({
              ...prevState,
              meliImage:result.url
            }))
          },
          (error) => {
              console.log(error);
          }
          )
          .catch((error)=>{
          console.log(error)
          })

      },[image])
    const updateChanges=()=>{
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json',
            'x-access-token':token&&token.token,'userid':token&&token.userId },
            body:JSON.stringify({...changes})
        }
        fetch(env.siteApi + "/user/update-client",postOptions)
    .then(res => res.json())
    .then(
        (result) => {
            if(result.error){
                console.log(result.error)
            }
            else{
                
            setError(result.message)
            setTimeout(()=>window.location.reload(),3000)
            }
        },
        (error) => {
            console.log(error)
        })
    }
    return(
        <div className="fullWidth">
            <form className="profileForm">
                <MyInput title="نام" require={true} class="profileInput"
                action={setChanges} param="cName" defaultValue={data.cName}/>
                <MyInput title="نام خانوادگی" require={true} class="profileInput"
                action={setChanges} param="sName" defaultValue={data.sName}/>
                <MyInput title="کد ملی / شماره کارت اقامت" require={true} class="profileInput"
                action={setChanges} param="meliCode" defaultValue={data.meliCode}/>
                <MyInput title="حوزه فعالیت/تخصص" require={true} class="profileInput"
                action={setChanges} param="work" defaultValue={data.work}/>
                <MyInput title="شماره همراه" require={true} class="profileInput"
                disabled={true}
                action={setChanges} param="phone" defaultValue={data.phone}/>
                <MyInput title="ایمیل" require={true} class="profileInput"
                action={setChanges} param="email" defaultValue={data.email}/>
                <ImageSimple cardName="Input Image" imageGallery={[]} 
                    setImage={setImage} part={1}/>
                <ImageShow url={(changes&&changes.meliImage)?
                    changes.meliImage:data.meliImage} />
            </form>
            <div className="buttonHolder">
                <a className="cl-button -primary -small -light ga_nav_link homepage-hp-nav " 
                onClick={updateChanges}> ذخیره اطلاعات</a>
                <a className="cl-button -secondary -small -light ga_nav_link homepage-hp-nav " 
                > پاک کردن فرم</a>
            </div>
            <div className="messageShow" >{error}</div>
                
        </div>
    )
}
export default ProfileBody