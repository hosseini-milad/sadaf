import { useEffect, useState } from "react";
import ImageSimple from "./ImageSimple";
import env from "../../env";
import UploadSimple from "./UploadSimple";

function MyUpload(props){

    
    const [image,setImage]= useState();
    const [imageUrl,setImageUrl] = useState(props.defaultValue)
    useEffect(() => {
      const postOptions={
          method:'post',
          headers: {
              "content-type": "application/json"
          },
          body:JSON.stringify({base64image:image&&image.base64,
                              imgName:image&&image.fileName,
                            folderName:"product"})
      }//URL.createObjectURL(image)
      //console.log(postOptions)
      image&&fetch(env.siteApi+"/user/upload",postOptions)
          .then(res => res.json())
          .then(
          (result) => {
            UpdateValue(result.url)
          },
          (error) => {
              console.log(error);
          }
          )
          .catch((error)=>{
          console.log(error)
          })

      },[image])
    
    const UpdateValue=(value,thumb)=>{
        var param = props.param?props.param:'park'
        if(thumb) param = props.thumb
        var updateQuery = `{"${param}":"${value}"}`
        var updateJson = JSON.parse(updateQuery)
        props.action((prevState) => ({
            ...prevState,
            ...updateJson,
        }))
    }
    return(
        <div className={`private-form__set m-bottom-4 ${props.class}`}>
            <div className="private-form__control-wrapper">
                <div className="imageTitle">
                    <label htmlFor="username" id="UIFormControl-label-2" className="private-form__label UIFormControl__InlineFormLabel-sc-10n543l-0 bOHTmT">
                    <span className="UIFormControl__StyledSpan-sc-10n543l-2 jqHBHp">
                        <i18n-string >{props.title}</i18n-string>
                    </span>
                    </label>
                </div>
                <div className="private-form__input-wrapper imgPreview">
                {imageUrl?
                <img src={env.siteApiUrl+imageUrl} />:
                <UploadSimple cardName="Input Image" imageGallery={[]} 
                    setImage={setImage} setImageUrl={setImageUrl} part={1}/>}
                <input type="button" value="حذف فایل" 
                onClick={()=>setImageUrl()}/>
                </div>
            </div>
        </div>
    )

    


}
export default MyUpload