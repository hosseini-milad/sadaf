import { useEffect, useState } from "react"
import { PostReq } from "../components/PostReq"
import Paging from "../modules/Components/Paging"
import env from "../env"
import CompanyName from "../modules/Company/Edit/CompanyName"
import CompanyProduct from "../modules/Company/Edit/CompanyProduct"
import CompanyImages from "../modules/Company/Edit/CompanyImages"

function CompanyEdit(props){
    const [data,setData] = useState()
    const [uChange,setUChanges] = useState()
    const [changes,setChanges] = useState()
    const url = document.location.pathname.split('/')[2]
    
    const saveProducts=()=>{
      console.log(changes)
    }
    useEffect(()=>{initial()},[])
    const initial=async()=>{
        var result = await PostReq(
        {method:"POST",url:"/company/list-change-admin",
            body:{id:url}
        })
        const data = (result&&result.data)?result.data[0]:''
        setUChanges(data)
        setData(data&&data.origin)
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
export default CompanyEdit