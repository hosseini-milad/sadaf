import env from "../../env"

function CompanyHolder(props){
    const data = props.data
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
                                    <td>ایتا</td>
                                    <th>@qomstp.ir</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-8">
                        <p>{data.description}</p>
                        <hr/>

                        <h4>{data.productTitle}</h4>
                        <p>{data.productDescription}</p>
                    <div className="row imageFrame" >
                        <div className="col-sm-4">
                            <img className="img-responsive" 
                            src={data.image1?env.siteApiUrl+data.image1:''}/>
                        </div>
                        <div className="col-sm-4">
                            <img className="img-responsive" 
                            src={data.image2?env.siteApiUrl+data.image2:''}/>
                        </div>
                        <div className="col-sm-4">
                            <img className="img-responsive" 
                            src={data.image3?env.siteApiUrl+data.image3:''}/>
                        
                        </div>
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