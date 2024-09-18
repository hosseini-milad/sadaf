import { useEffect, useState } from "react";
import ImageSimple from "./ImageSimple";
import env from "../../env";

function MyImage(props){

    
    const [image,setImage]= useState();
    const [thumb,setThumb]= useState();
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
    useEffect(() => {
      const postOptions={
          method:'post',
          headers: {
              "content-type": "application/json"
          },
          body:JSON.stringify({base64image:thumb&&thumb.base64,
                              imgName:thumb&&thumb.fileName,
                            folderName:"product"})
      }//URL.createObjectURL(image)
      //console.log(postOptions)
      thumb&&fetch(env.siteApi+"/user/upload",postOptions)
          .then(res => res.json())
          .then(
          (result) => {
            UpdateValue(result.url,"thumb")
            setImageUrl(result.url)
          },
          (error) => {
              console.log(error);
          }
          )
          .catch((error)=>{
          console.log(error)
          })

      },[thumb])

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
                <ImageSimple cardName="Input Image" imageGallery={[]} 
                    setImage={setImage} setImageUrl={setImageUrl} part={1}
                    setThumb={setThumb}/>}
                <input type="button" value="حذف تصویر" 
                onClick={()=>setImageUrl()}/>
                </div>
            </div>
        </div>
    )

    


}
export default MyImage