import React, { useRef ,useEffect, useState} from 'react';
import StyleInput from '../../../components/Button/Input';
import tabletrans from '../../../translate/tables';
import ImageSimple from '../../../components/Button/ImageSimple';
import env from '../../../env';
import RichTextEditor from '../../../components/Button/RichTextEditor';

function CompanyName(props){
    const content = props.content
    const uChange = props.uChange
    return(
        <div className="pd-row">
          <div className="row-title">
            <h4>نام شرکت</h4>
            <p>مشخصات هویتی شرکت</p>
          </div>
          <div className="row-box">
            <div className="details-wrapper">
                <StyleInput title="نام شرکت"
                 class={"formInput"} defaultValue={content?content.title:''} 
                 action={(e)=>props.setChanges(prevState => ({
                    ...prevState,
                    title:e
                  }))}/>
                <StyleInput title="مدیرعامل" 
                 class={"formInput"} defaultValue={content?content.managerName:''} 
                 action={(e)=>props.setChanges(prevState => ({
                    ...prevState,
                    managerName:e
                  }))}/>
                <div className='inLine'>
                <StyleInput title="شماره ثبت" 
                 class={"formInput"} defaultValue={content?content.regCode:''} 
                 action={(e)=>props.setChanges(prevState => ({
                    ...prevState,
                    regCode	:e
                  }))}/>
                  
                <StyleInput title="حوزه فعالیت/تخصص" 
                 class={"formInput"} defaultValue={content?content.work:''} 
                 action={(e)=>props.setChanges(prevState => ({
                    ...prevState,
                    work:e
                  }))}/>
            </div>
              <div className='inLine'>
                  <StyleInput title="شماره تماس" 
                  class={"formInput"} defaultValue={content?content.phone:''} 
                  action={(e)=>props.setChanges(prevState => ({
                      ...prevState,
                      phone	:e
                    }))}/>
                    
                  <StyleInput title="ایمیل" 
                  class={"formInput"} defaultValue={content?content.email:''} 
                  action={(e)=>props.setChanges(prevState => ({
                      ...prevState,
                      email:e
                    }))}/>
              </div>
              <StyleInput title="درباره شرکت" 
                 class={"formInput"} defaultValue={content?content.description:''} 
                 action={(e)=>props.setChanges(prevState => ({
                    ...prevState,
                    description:e
                  }))}/>
            </div>
          </div>
        </div>
    )
}
export default CompanyName