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
                    <div className="col-sm-2">
                        <img className="img-responsive" 
                        src={data.logo?env.siteApiUrl+data.logo:''}/>
                    </div>
                    <div className="col-sm-10">
                        <p>{data.description}</p>
                    </div>
                    </div>
                </div>
                <div className="clear20">&nbsp;</div>
                <div className="alert">
                    <div className="row">
                    <div className="col-sm-3">
                        <ul>مدیرعامل: {data.managerName}</ul>
                        <ul>شماره ثبت: {data.regCode}</ul>

                    </div>
                    <div className="col-sm-9">
                        <h4>{data.productTitle}</h4>
                        <p>{data.productDescription}</p>
                    </div>
                    </div>
                </div>
                <div className="alert">
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
                <div className="clear20">&nbsp;</div>
                </div>
            </div>
    )
}
export default CompanyHolder