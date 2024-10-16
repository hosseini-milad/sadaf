import { useEffect, useState } from "react"
import MyInput from "../../../components/Button/Input"
import MyOption from "../../../components/Button/Options"
import env from "../../../env"
import MyImage from "../../../components/Button/Image"
import PageImage from "./Page-Image"
import MyUpload from "../../../components/Button/Upload"

function MyPageEdit(props){
    const token = props.token
    const [data,setMyData] = useState('')
    const [myChange,setMyChangeData] = useState('')
    const [changes,setChanges] = useState()
    const [cat,setCat] = useState()
    const [unit,setUnit] = useState()
    const [error,setError] = useState()
    useEffect(()=>{
        const postOptions={
            method:'get',
            headers: {'Content-Type': 'application/json',
            'x-access-token':token&&token.token,'userid':token&&token.userId }
        }
        console.log(postOptions)
        fetch(env.siteApi + "/company/get-my-company",postOptions)
    .then(res => res.json())
    .then(
        (result) => {
            if(result.error){
                console.log(result.error)
            }
            else{
                setMyData(result.data?result.data:{})
                setMyChangeData(result.change?result.change:{})
                setUnit(result.unitList?result.unitList:[])
                setCat(result.catList?result.catList:[])
            }
        },
        (error) => {
            console.log(error)
        })
    },[])
    const updateChanges=()=>{
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json',
            'x-access-token':token&&token.token,'userid':token&&token.userId },
            body:JSON.stringify({...changes})//,companyId:data&&data._id})
        }
        console.log(postOptions)
        fetch(env.siteApi + "/company/set-company",postOptions)
    .then(res => res.json())
    .then(
        (result) => {
            if(result.error){
                setError(result.error)
                setTimeout(()=>setError(),3000)
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
    console.log(changes)
    return(
        <div className="fullWidth">
            {(data||myChange)?<form className="profileForm">
                <h5 className="profileText">اطلاعات شرکت</h5>
                <MyInput title="عنوان شرکت" require={true} class="profileInput"
                defaultChange={myChange&&myChange.title}
                action={setChanges} param="title" defaultValue={data.title}/>
                <MyInput title="مدیر عامل" require={true} class="profileInput"
                defaultChange={myChange&&myChange.managerName}
                action={setChanges} param="managerName" defaultValue={data.managerName}/>
                <MyInput title="آدرس شرکت" require={true} class="profileInput"
                defaultChange={myChange&&myChange.address}
                action={setChanges} param="address" defaultValue={data.address}/>
                <MyInput title="حوزه فعالیت/تخصص" require={true} class="profileInput"
                defaultChange={myChange&&myChange.work}
                action={setChanges} param="work" defaultValue={data.work}/>
                <MyOption title="دسته بندی" require={true} class="profileInput"
                defaultChange={myChange&&myChange.catName} options={cat}
                action={setChanges} param="category" defaultValue={data.category}/>
                <MyOption title="واحد" require={true} class="profileInput"
                defaultChange={myChange&&myChange.unitName} options={unit}
                action={setChanges} param="unit" defaultValue={data.unit}/>
                <MyInput title="شماره تماس" require={true} class="profileInput"
                defaultChange={myChange&&myChange.phone}
                action={setChanges} param="phone" defaultValue={data.phone}/>
                <MyInput title="ایمیل" require={true} class="profileInput"
                defaultChange={myChange&&myChange.email}
                action={setChanges} param="email" defaultValue={data.email}/>
                <MyInput title="درباره شرکت " class="profileTextArea" kind="textarea"
                defaultChange={myChange&&myChange.description}
                action={setChanges} param="description" defaultValue={data.description}/>
                <hr/>
                <h5 className="profileText">اطلاعات محصول</h5>
                <MyInput title="عنوان محصول" require={true} class="profileInput"
                defaultChange={myChange&&myChange.productTitle}
                action={setChanges} param="productTitle" defaultValue={data.productTitle}/>
                <MyInput title="مجوزها" require={true} class="profileInput"
                defaultChange={myChange&&myChange.licence}
                action={setChanges} param="licence" defaultValue={data.licence&&data.licence[0]}/>
                <MyInput title="توضیح محصول" class="profileTextArea" kind="textarea"
                defaultChange={myChange&&myChange.productDescription}
                action={setChanges} param="productDescription" defaultValue={data.productDescription}/>
            <MyUpload title="کاتالوگ محصول" require={true} class="imageInput" 
            data={myChange&&myChange.catalogue}
            action={setChanges} param="catalogue" 
            defaultValue={data&&data.catalogue}/>
       

                <hr/>
                <h5 className="profileText">راه های ارتباطی</h5>
                <MyInput title="وب سایت" require={true} class="profileTextArea"
                defaultChange={myChange&&myChange.website}
                action={setChanges} param="website" defaultValue={data.website}/>
                <MyInput title="ایتا" require={true} class="profileInput"
                defaultChange={myChange&&myChange.eita}
                action={setChanges} param="eita" defaultValue={data.eita}/>
                <MyInput title="لینکداین" require={true} class="profileInput"
                defaultChange={myChange&&myChange.linkedin}
                action={setChanges} param="linkedin" defaultValue={data.linkedin}/>
                <MyInput title="اینستاگرام" class="profileInput"
                defaultChange={myChange&&myChange.instagram}
                action={setChanges} param="instagram" defaultValue={data.instagram}/>
                <MyInput title="تلگرام" class="profileInput"
                defaultChange={myChange&&myChange.telegram}
                action={setChanges} param="telegram" defaultValue={data.telegram}/>
                <MyInput title="آپارات" class="profileInput"
                defaultChange={myChange&&myChange.aparat}
                action={setChanges} param="aparat" defaultValue={data.aparat}/>
                <MyInput title="یوتیوب" class="profileInput"
                defaultChange={myChange&&myChange.youtube}
                action={setChanges} param="youtube" defaultValue={data.youtube}/>
                <hr/>
                <h5 className="profileText">تصاویر شرکت</h5>
                <PageImage data={data} changes={changes} setChanges={setChanges}/>
                <MyInput title="ویدیوی معرفی" require={true} class="profileTextArea"
                defaultChange={myChange&&myChange.videoUrl}
                action={setChanges} param="videoUrl" defaultValue={data.videoUrl}/>
            </form>:<></>}
            <div className="buttonHolder">
                <a className="cl-button -primary -small -light ga_nav_link homepage-hp-nav " 
                onClick={updateChanges}> ذخیره اطلاعات</a>
                <a className="cl-button -secondary -small -light ga_nav_link homepage-hp-nav " 
                > پاک کردن فرم</a>
            </div>
            {error?<small className="errorHandle">{error}</small>:<></>}
        </div>
    )
}
export default MyPageEdit