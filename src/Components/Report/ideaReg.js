import { useState } from "react"
import env from "../../env"
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function IdeaReg(props){
    const token = cookies.get(env.cookieName)
    const [open,setOpen] = useState(0)
    const [ideaDesc,setIdeaDesc] = useState()
    const [ideaTitle,setIdeaTitle] = useState()
    const [ideaBenefit,setIdeaBenefit] = useState()
    const [ideaStatus,setIdeaStatus] = useState()
    const [ideaRecommend,setIdeaRecommend] = useState()
    const [ideaMoney,setIdeaMoney] = useState()
    const [ideaTime,setIdeaTime] = useState()
    const [error, setError] = useState({message:"",color:""});
    const regIdeaFunc=()=>{
        const postBody={
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              'x-access-token':token&&token.token,'userid':token&&token.userId
            },
            body: JSON.stringify({
                title:ideaTitle,
                description:ideaDesc,
                ideaBenefit:ideaBenefit,
                ideaRecommend:ideaRecommend,
                ideaMoney:ideaMoney,
                ideaTime:ideaTime,

                reqCode:props.reqCode
            }),
          }
          fetch(env.siteApi + "/data/reg-idea",postBody)
           .then((res) => res.json())
           .then(
             (result) => {
               if(result.error){
                  setError({message:result.message,color:"brown"})
               }
               else{
                  setError({message:result.message,color:"green"})
                  setTimeout(()=>setError({message:"",color:""}),3000)
               }
             },
             (error) => {
               console.log(error);
             }
           );
    }
    return(
        <li className="hsg-accordion__item" data-hsg-mounted="">
            <button className="hsg-accordion__label" onClick={()=>setOpen(open?0:1)}>
                <h3 className="hsg-accordion__label-text marketing-hero-product">{props.title} 
                <span aria-hidden="true" className="hsg-accordion__icon-wrapper">
                    {!open?<i className="fa fa-plus"></i>:
                        <i className="fa fa-minus"></i>}
                </span>
                </h3>
            </button>
            {error.message?
            <small style={{color:error.color}}>{error.message}</small>:
                
                <fieldset class="form-columns-2">
                <div class="hs_email hs-email hs-fieldtype-text field hs-form-field fullWidth colPad fieldSet">
                    <legend class="hs-field-desc"></legend>
                    <input type="text" placeholder="عنوان ایده" 
                        onChange={(e)=>setIdeaTitle(e.target.value)}/>
                    
                    <div class="input">
                        <textarea name="idea" placeholder="توضیحات ایده" type="email" rows="4"
                        class="hs-input" inputmode="email" 
                        onChange={(e)=>setIdeaDesc(e.target.value)}
                        autocomplete="email"></textarea>
                    </div>
                    <input type="text" placeholder="مزایا و فایده ایده " 
                        onChange={(e)=>setIdeaBenefit(e.target.value)}/>
                        
                    <input type="text" placeholder="وضعیت فعلی ایده  " 
                        onChange={(e)=>setIdeaStatus(e.target.value)}/>
                    <input type="text" placeholder="نیازمندی های اجرایی ایده  " 
                        onChange={(e)=>setIdeaRecommend(e.target.value)}/>
                    <input type="text" placeholder="نیازمندی های مالی ایده " 
                        onChange={(e)=>setIdeaMoney(e.target.value)}/>
                    <input type="text" placeholder="مدت زمان مورد نیاز برای اجرایی شدن ایده " 
                        onChange={(e)=>setIdeaTime(e.target.value)}/>
                    <hr/>
                    <input type="button" value="ثبت ایده"
                     onClick={regIdeaFunc} />
                </div>
            </fieldset>
                }
        </li>
    )

}
export default IdeaReg