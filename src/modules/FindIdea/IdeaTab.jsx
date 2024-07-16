function IdeaTab(props){
  const search = props.search
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
              <li className="cl-tab-item">
                <button className="cl-tab-button" onClick={()=>props.setSearch("مهندسي")}
                  aria-selected={search=="مهندسي"?"true":""}>
                   فنی مهندسی </button>
              </li>
              <li className="cl-tab-item " role="presentation">
                <button className="cl-tab-button" onClick={()=>props.setSearch("طب سنت")}
                  aria-selected={search=="طب"?"true":""}> طب سنتی </button>
              </li>
              <li className="cl-tab-item " role="presentation">
                <button className="cl-tab-button" onClick={()=>props.setSearch("پزشكي")}
                  aria-selected={search=="پزشكي"?"true":""}> مهندسی پزشکی </button>
              </li>
              <li className="cl-tab-item " role="presentation">
                <button className="cl-tab-button" onClick={()=>props.setSearch("نظامي")}
                  aria-selected={search=="نظامي"?"true":""}> صنایع دفاعی </button>
              </li>
              <li className="cl-tab-item " role="presentation">
                <button className="cl-tab-button" onClick={()=>props.setSearch("نانو")}
                  aria-selected={search=="نانو"?"true":""}> فناوری های نوظهور </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    )
}
export default IdeaTab