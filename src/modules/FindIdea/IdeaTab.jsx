function IdeaTab(){
    return(
      <section id="free-crm-tabs-section" className="free-crm-tabs-section -dark -background-01">
      <div className="free-crm-tabs-section-wrapper">
        <div id="free-crm-tabs" className="cl-tabs free-crm-tabs">
          <div className="cl-tab-control -overflow-right">
            <ul className="cl-tab-list" role="tablist">
              <li className="cl-tab-item -active" role="presentation">
                <button className="cl-tab-button" role="tab" id="tab-free-crm__persona-tab_1" aria-selected="true"> همه دسته ها </button>
              </li>
              <li className="cl-tab-item " role="presentation">
                <button className="cl-tab-button" role="tab" aria-controls="free-crm__persona-tab_2" > فنی مهندسی </button>
              </li>
              <li className="cl-tab-item " role="presentation">
                <button className="cl-tab-button" role="tab" aria-controls="free-crm__persona-tab_3" > علوم انسانی </button>
              </li>
              <li className="cl-tab-item " role="presentation">
                <button className="cl-tab-button" role="tab" aria-controls="free-crm__persona-tab_4" > مهندسی پزشکی </button>
              </li>
              <li className="cl-tab-item " role="presentation">
                <button className="cl-tab-button" role="tab" aria-controls="free-crm__persona-tab_5" > صنایع دفاعی </button>
              </li>
              <li className="cl-tab-item " role="presentation">
                <button className="cl-tab-button" role="tab" aria-controls="free-crm__persona-tab_6" > فناوری های نوظهور </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    )
}
export default IdeaTab