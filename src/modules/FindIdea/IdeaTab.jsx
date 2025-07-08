
function IdeaTab(props){
  const search = props.search
  const tabs = props.tabs
    return(
      <section id="free-crm-tabs-section" className="free-crm-tabs-section -dark -background-01">
      <div className="free-crm-tabs-section-wrapper">
        <div id="free-crm-tabs" className="cl-tabs free-crm-tabs">
          <div className="cl-tab-control -overflow-right">
            <ul className="cl-tab-list" role="tablist">
              <li className="cl-tab-item">
                <button className="cl-tab-button" id="tab-free-crm__persona-tab_1"
                onClick={()=>props.setSearch("")}
                 aria-selected={!search?"true":""}> همه دسته ها </button>
              </li>
              {tabs&&tabs.map((tab,i)=>(
                <li className="cl-tab-item" key={i}>
                <button className="cl-tab-button" onClick={()=>props.setSearch(tab.title)}
                  aria-selected={search==tab.title?"true":""}>
                   {tab.title} </button>
              </li> 
              ))}
              {/*<li className="cl-tab-item">
                <button className="cl-tab-button" onClick={()=>props.setSearch("برنامه")}
                  aria-selected={search=="برنامه"?"true":""}>
                   ایده‌پردازی و برنامه‌ریزی </button>
              </li> 
              <li className="cl-tab-item " role="presentation">
                <button className="cl-tab-button" onClick={()=>props.setSearch("محتوا")}
                  aria-selected={search=="محتوا"?"true":""}>	تحقیق و توسعه محتوا </button>
              </li>
              <li className="cl-tab-item " role="presentation">
                <button className="cl-tab-button" onClick={()=>props.setSearch("تولید")}
                  aria-selected={search=="تولید"?"true":""}>	تولید محتوا </button>
              </li>
              <li className="cl-tab-item " role="presentation">
                <button className="cl-tab-button" onClick={()=>props.setSearch("ویرایش")}
                  aria-selected={search=="ویرایش"?"true":""}>	ویرایش و بهینه‌سازی </button>
              </li>
              <li className="cl-tab-item " role="presentation">
                <button className="cl-tab-button" onClick={()=>props.setSearch("انتشار")}
                  aria-selected={search=="انتشار"?"true":""}>	توزیع و انتشار</button>
              </li>*/}
            </ul>
          </div>
        </div>
      </div>
    </section>
    )
}
export default IdeaTab