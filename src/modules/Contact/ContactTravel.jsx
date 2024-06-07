function ContactTab(){
    return(
        <div className="container">
        <div className="clear40"></div>
        <div className="text-center">
          <ul className="nav nav-tabs nav-tabs-howitworks" role="tablist">
            <li className="active">
              <a href="/en/info/how-it-works/workawayer"> Workawayers </a>
            </li>
            <li>
              <a href="/en/info/how-it-works/host"> Hosts </a>
            </li>
          </ul>
        </div>
        <div className="clear40"></div>
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <p className="text-center lead">
              <strong>A Workawayer is:</strong> a traveller who wants to give back to the communities and places they visit. Open to helping hosts and using the experience to learn and immerse in the local culture.
            </p>
          </div>
        </div>
        <div className="clear40"></div>
      </div>
    )
}
export default ContactTab