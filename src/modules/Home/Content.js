
function Content(props){
    
  //window.scrollTo(0, 270);},[pageNumber,filters,perPage,refreshTable])
   return(
    <section className="container" id="content">
  <section className="academy-learn" data-background="off-white">
      <h2 className="headline-main">
        <i className="fa fa-book btnIcon"></i>موضوع  و محورهای رویداد
      </h2>
  </section>
  <div className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
    <section className="hsg-multi-col" data-background="off-white">
      <div className="hsg-multi-col__wrapper hs-page-width-module">
      <p className="P60">موضوع اصلی رویداد، فناوری و نوآوری های هنر صنعتی فرش دستباف است. محورهای اصلی رویداد به شرح  زیر است:</p>
      </div>
      <div className="hsg-multi-col__wrapper hs-page-width-module">
        <div className="hsg-multi-col__item">
          <div className="hsg-multi-col-item__text-content">
            <h3 className="hsg-multi-col__name">احراز اصالت</h3>
            <div className="hsg-multi-col__description">
              <p>
                <span>احراز اصالت و مالکیت معنوی آثار در حوزه فرش دستباف</span>
              </p>
            </div>
          </div>
        </div>
        <div className="hsg-multi-col__item">
          <div className="hsg-multi-col-item__text-content">
            <h3 className="hsg-multi-col__name">بازاریابی</h3>
            <div className="hsg-multi-col__description">
              <p>
                <span>بازاریابی و بازارسازی فرش دستباف</span>
              </p>
            </div>
          </div>
        </div>
        <div className="hsg-multi-col__item">
          <div className="hsg-multi-col-item__text-content">
            <h3 className="hsg-multi-col__name">نوغانداری</h3>
            <div className="hsg-multi-col__description">
              <p>
                <span>
                نوغانداری و بهبود کیفیت ابریشم تولید داخل کشور
              </span>
              </p>
            </div>
          </div>
        </div>
        <div className="hsg-multi-col__item">
          <div className="hsg-multi-col-item__text-content">
            <h3 className="hsg-multi-col__name">هوش مصنوعی</h3>
            <div className="hsg-multi-col__description">
              <p>
                <span>
               کاربرد هوش مصنوعی در زیست بوم فرش دستباف
              </span>
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  </div>
</section>
   )
}
export default Content