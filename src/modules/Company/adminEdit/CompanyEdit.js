import { useEffect, useState } from "react"
import { PostReq } from "../../../components/PostReq"
import env from "../../../env"
import CompanyName from "./CompanyName"
import CompanyProduct from "./CompanyProduct"
import CompanyImages from "./CompanyImages"

function CompanyAdminEdit(props){
    const [data,setData] = useState()
    const [uChange,setUChanges] = useState()
    const [changes,setChanges] = useState()
    const url = document.location.pathname.split('/')[2]
    
    const saveProducts=async(state)=>{
      var result = await PostReq(
        {method:"POST",url:"/company/update-admin-company/",
          body:{id:url,...changes}
        })
        if(state){
          window.location.href="/company"
        }
    }
    useEffect(()=>{initial()},[])
    const initial=async()=>{
        var result = await PostReq(
        {method:"GET",url:"/company/fetch-company/"+url})
        const data = (result&&result.data)?result.data:''
        setUChanges(data)
        setData(data)
    }
    console.log(data)
    return(
      <div className="new-item" style={{ direction: "rtl" }}>
      <div className="create-product">
        <h4>ویرایش مشخصات شرکت</h4>
        {data ? (
          <div className="pages-wrapper">
            <CompanyName content={data} uChange={uChange}
              setChanges={setChanges}/>
            <CompanyProduct content={data} uChange={uChange}
              setChanges={setChanges}/>
            <CompanyImages content={data} uChange={uChange}
              setChanges={setChanges}/>
            {/* <ProductPrice direction={direction} lang={lang} content={content} 
          productChange={productChange} setProductChange={setProductChange}/> */}
            <div className="create-btn-wrapper">
              <div className="save-btn" onClick={() => saveProducts(false)}>
                ذخیره
              </div>
              <div className="save-btn" onClick={() => saveProducts(true)}>
                ذخیره و تایید
              </div>
              {/* <div className="save-btn" onClick={saveProducts}>
                {formtrans.saveChanges[lang]}
              </div> */}
              <div className="cancel-btn" onClick={() => window.history.back()}>
                انصراف
              </div>
            </div>
          </div>
        ) : (
          <div>{env.loader}</div>
        )}
      </div>
    </div>
    )
}
export default CompanyAdminEdit