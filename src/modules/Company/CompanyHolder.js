import { useState } from "react"
import env, { permLink } from "../../env"
import InnerHTML from 'dangerously-set-html-content'

function CompanyHolder(props){
    const data = props.data
    const [show,setShow] = useState(0)
    return(
        <div className="pageHolder">
            <div className="sliderPlace">
                <img className="slider-image" 
                    src={data.bannerUrl?env.siteApiUrl+data.bannerUrl:''}/>
                <h1>{data.title}</h1>
                {props.edit?<a href="/my-page-edit">ویرایش</a>:<></>}
            </div>
            <div className="container">
                <div className="clear30"></div>
                
                <div className="alert alert-grey noborder">
                    <div className="row">
                    <div className="col-sm-4">
                        <img className="img-responsive" 
                        src={data.logo?env.siteApiUrl+data.logo:''}/>
                        <table className="infoTable">
                            <tbody>
                                <tr>
                                    <td>حوزه فعالیت</td>
                                    <th>{data.catData?data.catData.title:'-'}</th>
                                </tr>
                                <tr>
                                    <td>واحد</td>
                                    <th>{data.unitData?data.unitData.title:'-'}</th>
                                </tr>
                                <tr>
                                    <td>مدیرعامل</td>
                                    <th>{data.managerName}</th>
                                </tr>
                                <tr>
                                    <td>شماره تماس</td>
                                    <th>{data.phone}</th>
                                </tr>
                                <tr>
                                    <td>آدرس ایمیل</td>
                                    <th>{data.email}</th>
                                </tr>
                                <tr>
                                    <td>آدرس پستی</td>
                                    <th>{data.address}</th>
                                </tr>
                                <tr style={{cursor:"pointer"}} onClick={()=>setShow(show==1?0:1)}>
                                    <td className={`hsg-accordion__item ${show==1?"active" :""}`}>
                                        <span>شبکه اجتماعی</span>
                                    </td>
                                    <td>
                                        {show?<i className="fa fa-chevron-down"></i>:
                                            <i className="fa fa-chevron-left"></i>}
                                    </td>
                                </tr>
                                {show?<>
                                    {data.website?<tr className="socialHolder">
                                    <td><i className="fa fa-globe socialIcon"></i>
                                        وب سایت</td>
                                    <th><a href={permLink(data.website)}>{data.website}</a></th>
                                </tr>:<></>}
                                {data.eita?<tr className="socialHolder">
                                    <td><img src="/img/eitaa.png" className="socialImages"/>
                                        ایتا</td>
                                    <th><a href={permLink(data.eita)}>{data.eita}</a></th>
                                </tr>:<></>}
                                {data.linkedin?<tr className="socialHolder">
                                    <td><i className="fa fa-linkedin socialIcon"></i>
                                        لینکداین</td>
                                    <th><a href={permLink(data.linkedin)}>{data.linkedin}</a></th>
                                </tr>:<></>}
                                {data.instagram?<tr className="socialHolder">
                                    <td><i className="fa fa-instagram socialIcon"></i>
                                        اینستاگرام</td>
                                    <th><a href={permLink(data.instagram)}>{data.instagram}</a></th>
                                </tr>:<></>}
                                {data.telegram?<tr className="socialHolder">
                                    <td><i className="fa fa-telegram socialIcon"></i>
                                        تلگرام</td>
                                    <th><a href={permLink(data.telegram)}>{data.telegram}</a></th>
                                </tr>:<></>}
                                {data.aparat?<tr className="socialHolder">
                                    <td><i className="fa fa-media-player socialIcon"></i>
                                    آپارات</td>
                                    <th><a href={permLink(data.aparat)}>{data.aparat}</a></th>
                                </tr>:<></>}
                                {data.youtube?<tr className="socialHolder">
                                    <td><i className="fa fa-youtube socialIcon"></i>
                                        یوتیوب</td>
                                    <th><a href={permLink(data.youtube)}>{data.youtube}</a></th>
                                </tr>:<></>}
                                </>:<></>}
                            </tbody>
                        </table>
                        <hr/>
                        <table className="infoTable">
                            <tbody>
                                <tr>
                                    <td>مجوزها</td>
                                    <th>{data.licence?data.licence:'-'}</th>
                                </tr>
                            </tbody>
                        </table>
                        {data.videoUrl?
                        <InnerHTML html={data.videoUrl}/>:
                        <></>}
                    </div>
                    <div className="col-sm-8">
                        <h3>معرفی شرکت: </h3>
                        <p>{data.description}</p>
                        <hr/>
                        <i>معرفی محصول:</i>
                        <h4 style={{position:"relative"}}>
                            
                             {data.productTitle}
                            
                        <a href={env.siteApiUrl+data.catalogue} 
                        className="catalogueBTN" >
                            کاتالوگ <i className="fa fa-download"></i></a>
                        </h4>
                        <p>{data.productDescription}</p>
                        <h3>دستاوردها و افتخارات: </h3>
                        <p>{data.achivement}</p>
                        <hr/>
                    <div className="row imageFrame" >
                        {data.image1?<div className="col-sm-4">
                            <img className="img-responsive" 
                            src={env.siteApiUrl+data.image1}/>
                        </div>:<></>}
                        {data.image2?<div className="col-sm-4">
                            <img className="img-responsive" 
                            src={env.siteApiUrl+data.image2}/>
                        </div>:<></>}
                        {data.image3?<div className="col-sm-4">
                            <img className="img-responsive" 
                            src={env.siteApiUrl+data.image3}/>
                        
                        </div>:<></>}
                    </div>
                    </div>
                    </div>
                </div>
                <div className="clear20">&nbsp;</div>
                <div className="alert">
                </div>
                <div className="clear20">&nbsp;</div>
                </div>
            </div>
    )
}
export default CompanyHolder