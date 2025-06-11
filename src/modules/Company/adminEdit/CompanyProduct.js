import StyleSelect from "../../../components/Button/AutoComplete.js"
import StyleInput from "../../../components/Button/Input.js"
import tabletrans from "../../../translate/tables.jsx"
import React, { useState, useEffect } from 'react';
import { generateRandomString } from '../../../utils/utils.js'; 



function CompanyProduct(props){
  const content = props.content
  const uChange = props.uChange

    return(
        <div className="pd-row">
          <div className="row-title">
            <h4>مشخصات محصول</h4>
            <p>مشخصات، توضیحات و جزئیات محصول شرکت</p>
          </div>
          <div className="row-box">
            <div className="probs-wrapper">
              <div className="input-wrapper">
              <StyleInput title="نام محصول" 
                 class={"formInput"} defaultValue={content?content.productTitle:''} 
                 action={(e)=>props.setChanges(prevState => ({
                    ...prevState,
                    productTitle:e
                  }))}/>
                <StyleInput title={"توضیحات محصول"} 
                 class={"formInput"} defaultValue={content?content.productDescription:''}  
                 action={(e)=>props.setChanges(prevState => ({
                    ...prevState,
                    productDescription:e
                  }))}/>
                  
                <StyleInput title={"مجوز"} 
                 class={"formInput"} defaultValue={content?content.licence:''}  
                 action={(e)=>props.setChanges(prevState => ({
                    ...prevState,
                    licence:e
                  }))}/>
                
              </div>

            </div>
          </div>
        </div>
    )
}
export default CompanyProduct