import { useEffect, useState } from "react"
import env from "../../env"

function Slider(props){
  const [slider,setSlider] = useState()
  useEffect(()=>{
    const postOptions={
        method:'post',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({banner:true})
    }
    fetch(env.siteApi + "/company/list-company",postOptions)
    .then(res => res.json())
    .then(
        (result) => {
            if(result.error){
                console.log(result.error)
            }
            else{
              setSlider(result.data)
            }
        },
        (error) => {
            console.log(error)
        })
    },[])
    return(
      <section class="wf-section wf-page-header -neutral -padding-top-md -padding-bottom-md">
        {(slider&&slider[0])?<div class="wf-section-wrapper">
          <div class="wf-page-header__wrapper">
            <div class="wf-page-header__content-wrapper">
              <p class="wf-page-header__tagline -microheading">شرکت های پارک علم و فناوی استان قم</p>
              <h2 class="wf-page-header__heading">
                <img className="sliderLogo" src={env.siteApiUrl+slider[0].logo}/>
                {slider[0].title}</h2>
              <p class="wf-page-header__description">
              {slider[0].productTitle}
              </p>
              <div class="wf-page-header__cta-wrapper">
                <a class="
        cl-button -primary -large wf-page-header__cta homepage-hero-cta" 
        href={"/company/"+slider[0]._id+"/"+slider[0].title.replace( / /g, '_')} 
        rel="noreferrer " > اطلاعات بیشتر شرکت
                </a>
                <a class="
        cl-button -secondary -large wf-page-header__cta homepage-hero2-cta" 
        href={"tel:"+slider[0].phone} rel="noreferrer "> تماس با شرکت
                </a>
              </div>
            </div>
            <div class="wf-page-header__image-wrapper ">
              <img src={env.siteApiUrl+slider[0].bannerUrl}/>
            </div>
          </div>
        </div>:<></>}
      </section>
    )
}
export default Slider