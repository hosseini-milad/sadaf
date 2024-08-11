
const BreadCrumb = (props)=>{
  const content = props.content
    return(
      <div id="hs_cos_wrapper_all_hubs_breadcrumbs" 
        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
        <section className="" data-background="off-white">
          <div className="hsg-page-width-normal">
            <ul className="hsg-breadcrumbs ">
              <li className="hsg-breadcrumbs__item">
                <a className="hsg-breadcrumbs__link " 
                  href="/"> خانه </a>
              </li>
              <li className="hsg-breadcrumbs__item">
                <a className="hsg-breadcrumbs__link " 
                  href="/report"> تقاضای فناوری </a>
              </li>
              <li className="hsg-breadcrumbs__item">
                <a className="hsg-breadcrumbs__link current-link" 
                  href="#"> {content.title} </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
}
export default BreadCrumb