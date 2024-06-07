function HostMenu(props){
    const tab = props.tab
    return(
    <ul className="dropdown-menu" style={{display:tab===0?"block":""}}>
        <li>
            <div className="container">
            <div className="megamenu-content">
                <div className="row gx-5">
                <div className="col-sm-6 megamenu-content-col">
                    <div className="text-left">
                    <div className="megamenu-content-title megamenu-content-title-mobile">مقاصد محبوب</div>
                    <div className="row">
                        <div className="col-sm-6">
                        <ul className="megamenu-content-list">
                            <li>
                            <a className="megamenu-content-list-link" href="/en/destination/africa">
                                <div className="megamenu-content-list-link-text"> کردستان </div>
                            </a>
                            </li>
                            <li>
                            <a className="megamenu-content-list-link" href="/en/destination/asia">
                                <div className="megamenu-content-list-link-text"> گیلان </div>
                            </a>
                            </li>
                            <li>
                            <a className="megamenu-content-list-link" href="/en/destination/central-america">
                                <div className="megamenu-content-list-link-text"> گلستان </div>
                            </a>
                            </li>
                            <li>
                            <a className="megamenu-content-list-link" href="/en/hostlist/europe">
                                <div className="megamenu-content-list-link-text"> ایلام </div>
                            </a>
                            </li>
                            <li>
                            <a className="megamenu-content-list-link" href="/en/hostlist/middle-east">
                                <div className="megamenu-content-list-link-text"> زنجان </div>
                            </a>
                            </li>
                            <li>
                            <a className="megamenu-content-list-link" href="/en/hostlist/northamerica">
                                <div className="megamenu-content-list-link-text"> هرمزگان </div>
                            </a>
                            </li>
                            <li>
                            <a className="megamenu-content-list-link" href="/en/hostlist/oceania">
                                <div className="megamenu-content-list-link-text"> بوشهر </div>
                            </a>
                            </li>
                            <li>
                            <a className="megamenu-content-list-link" href="/en/destination/southamerica">
                                <div className="megamenu-content-list-link-text"> یزد </div>
                            </a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-sm-6">
                        <ul className="megamenu-content-list">
                            <li>
                            <a href="/en/destination/northamerica/ca">تهران</a>
                            </li>
                            <li>
                            <a href="/en/destination/central-america/cr">البرز</a>
                            </li>
                            <li>
                            <a href="/en/destination/asia/th">خراسان رضوی</a>
                            </li>
                            <li>
                            <a href="/en/destination/europe/gr">اصفهان</a>
                            </li>
                            <li>
                            <a href="/en/destination/southamerica/co">شیراز</a>
                            </li>
                            <li>
                            <a href="/en/destination/asia/vn">قم</a>
                            </li>
                            <li>
                            <a href="/en/destination/southamerica/br">آذربایجان شرقی</a>
                            </li>
                            <li>
                            <a href="/en/destination/africa/za">مازندران</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <ul className="megamenu-content-list">
                        <li>
                        <a href="/en/hostlist">همه موقعیت های شغلی</a>
                        </li>
                    </ul>
                    <div className="clear15"></div>
                    <div className="clear15 hidden-xs"></div>
                    <div className="row">
                        <div className="col-lg-8">
                        <div className="megamenu-btn">
                            <a href="/en/hostlist/middle-east/ir" className="btn btn-bordered fullwidth text-crop"> 
                            میزبان های نزدیک به من </a>
                        </div>
                        <div className="clear20 visible-xs-block"></div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*<div className="col-sm-6 megamenu-content-col">
                    <div className="text-left">
                    <div className="megamenu-content-title megamenu-content-title-mobile">محبوب ترین شغل ها</div>
                    <div className="row">
                        <div className="col-sm-6">
                        <ul className="megamenu-icon-list">
                            <li>
                            <a className="megamenu-icon-list-link" href="/en/hosttype/family">
                                <div className="megamenu-icon-list-icon">
                                <img src="/img/gfx/hosttype_family.svg"/>
                                </div>
                                <div className="megamenu-icon-list-link-text"> پرستاری </div>
                            </a>
                            </li>
                            <li>
                            <a className="megamenu-icon-list-link" href="/en/hostlist?ht[]=hosttype_individual">
                                <div className="megamenu-icon-list-icon">
                                <img src="/img/gfx/hosttype_individual.svg"/>
                                </div>
                                <div className="megamenu-icon-list-link-text"> مبادلات فردی </div>
                            </a>
                            </li>
                            <li>
                            <a className="megamenu-icon-list-link" href="/en/hosttype/community">
                                <div className="megamenu-icon-list-icon">
                                <img src="/img/gfx/hosttype_community.svg"/>
                                </div>
                                <div className="megamenu-icon-list-link-text"> پروژه های جامعه </div>
                            </a>
                            </li>
                            <li>
                            <a className="megamenu-icon-list-link" href="/en/hosttype/ngo">
                                <div className="megamenu-icon-list-icon">
                                <img src="/img/gfx/hosttype_ngo.svg"/>
                                </div>
                                <div className="megamenu-icon-list-link-text"> خیریه </div>
                            </a>
                            </li>
                            <li>
                            <a className="megamenu-icon-list-link" href="/en/hosttype/house_sitting">
                                <div className="megamenu-icon-list-icon">
                                <img src="/img/gfx/hosttype_house_sitting.svg"/>
                                </div>
                                <div className="megamenu-icon-list-link-text"> نظافت </div>
                            </a>
                            </li>
                            <li>
                            <a className="megamenu-icon-list-link" href="/en/hosttype/school">
                                <div className="megamenu-icon-list-icon">
                                <img src="/img/gfx/hosttype_school.svg"/>
                                </div>
                                <div className="megamenu-icon-list-link-text"> پروژه های آموزشی </div>
                            </a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-sm-6">
                        <ul className="megamenu-icon-list">
                            <li>
                            <a className="megamenu-icon-list-link" href="/en/hosttype/farm">
                                <div className="megamenu-icon-list-icon">
                                <img src="/img/gfx/hosttype_farm.svg"/>
                                </div>
                                <div className="megamenu-icon-list-link-text"> کشاورزی </div>
                            </a>
                            </li>
                            <li>
                            <a className="megamenu-icon-list-link" href="/en/hostlist?ht[]=hosttype_hostel">
                                <div className="megamenu-icon-list-icon">
                                <img src="/img/gfx/hosttype_hostel.svg"/>
                                </div>
                                <div className="megamenu-icon-list-link-text"> هتلداری </div>
                            </a>
                            </li>
                            <li>
                            <a className="megamenu-icon-list-link" href="/en/hosttype/boat">
                                <div className="megamenu-icon-list-icon">
                                <img src="/img/gfx/hosttype_hostel.svg"/>
                                </div>
                                <div className="megamenu-icon-list-link-text"> کشتی رانی </div>
                            </a>
                            </li>
                            <li>
                            <a className="megamenu-icon-list-link" href="/en/hosttype/sustainable_project">
                                <div className="megamenu-icon-list-icon">
                                <img src="/img/gfx/hosttype_sustainable_project.svg"/>
                                </div>
                                <div className="megamenu-icon-list-link-text"> پروژه های محیط زیست </div>
                            </a>
                            </li>
                            <li>
                            <a className="megamenu-icon-list-link" href="/en/hosttype/animal_welfare">
                                <div className="megamenu-icon-list-icon">
                                <img src="/img/gfx/hosttype_animal_welfare.svg"/>
                                </div>
                                <div className="megamenu-icon-list-link-text"> نگهداری از حیوانات </div>
                            </a>
                            </li>
                            <li>
                            <a className="megamenu-icon-list-link" href="/en/hostlist?ht[]=hosttype_other">
                                <div className="megamenu-icon-list-icon">
                                <img src="/img/gfx/hosttype_other.svg"/>
                                </div>
                                <div className="megamenu-icon-list-link-text"> غیره </div>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="clear15"></div>
                    <div className="clear15 hidden-xs"></div>
                    <div className="row">
                        <div className="col-lg-8">
                        <div className="megamenu-btn">
                            <a href="/en/hostlist?all=1" className="btn btn-bordered fullwidth text-crop"> 
                            مشاهده تمامی موقعیت های شغلی </a>
                            <div className="clear20 visible-xs-block"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>*/}
                </div>
            </div>
            </div>
        </li>
        </ul>
    )
}
export default HostMenu