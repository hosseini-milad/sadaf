import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/App.css';
import './css/board.css';
import './css/order.css';
import './css/fontAwesome.css';
import './css/salimi.css';
import './css/reyham.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'
import Login from './pages/Login';
import Cookies from 'universal-cookie';
import errortrans from './translate/error';
import LayoutLogin from './components/LayoutLogin';
import env, { findFPage } from './env';

import Data from './pages/Data';
import NewData from './pages/NewData';
import CategoryTable from './modules/Company/CategoryTable';
import UnitTable from './modules/Company/UnitTable';
import LicenceTable from './modules/Company/licenceTable';
import CompanyHolder from './pages/Company';
import CompanyEdit from './pages/CompanyEdit';
import CoWork from './pages/CoWork';
import Transactions from './pages/Transactions';
import ClientHolder from './pages/Clients';
import Requests from './pages/Request';
import ReqCategory from './modules/Request/ReqComponent/ReqCategory';

const cookies = new Cookies();
var lang = JSON.parse(localStorage.getItem(env.cookieLang));
/*if (lang.dir === 'rtl') {
  style.href = '/css/rtl.css';
} */
if(!lang){
  localStorage.setItem(env.cookieLang,JSON.stringify(
    { lang:errortrans.defaultLang,
      dir:errortrans.defaultDir,
      color:errortrans.defaultColor}));
  lang = JSON.parse(localStorage.getItem(env.cookieLang));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    {cookies.get(env.cookieName)?
      <Routes>
        <Route path="/" element={<Layout><Dashboard lang={lang}/></Layout>}/>
        <Route path="/dashboard" element={<Layout><Dashboard lang={lang}/></Layout>}/>
        <Route path="/data" element={<Layout><Data lang={lang}/></Layout>}/>
        <Route path="/new-data" element={<Layout><NewData lang={lang}/></Layout>}/>

        <Route path="/clients" element={<Layout><ClientHolder lang={lang}/></Layout>}/>
        <Route path="/company" element={<Layout><CompanyHolder lang={lang}/></Layout>}/>
        <Route path="/company-edit/:id" element={<Layout><CompanyEdit lang={lang}/></Layout>}/>
        <Route path="/category" element={<Layout><CategoryTable lang={lang}/></Layout>}/>
        <Route path="/unit" element={<Layout><UnitTable lang={lang}/></Layout>}/>
        <Route path="/licence" element={<Layout><LicenceTable lang={lang}/></Layout>}/>
        
        <Route path="/request" element={<Layout><Requests lang={lang}/></Layout>}/>
        <Route path="/request/:id" element={<Layout><CompanyEdit lang={lang}/></Layout>}/>
        <Route path="/req-cat" element={<Layout><ReqCategory lang={lang}/></Layout>}/>
        
        <Route path="/cowork" element={<Layout><CoWork lang={lang}/></Layout>}/>
        <Route path="/transactions" element={<Layout><Transactions lang={lang}/></Layout>}/>
        
      </Routes>:
        <Routes>
          <Route path="/" element={<LayoutLogin><Login lang={lang}/></LayoutLogin>}/>
          <Route path="/:auth" element={<LayoutLogin><Login lang={lang}/></LayoutLogin>}/>
          <Route path="/:page/:auth" element={<LayoutLogin><Login lang={lang}/></LayoutLogin>}/>
          <Route path="/:page/:page/:auth" element={<LayoutLogin><Login lang={lang}/></LayoutLogin>}/>
        </Routes>}
     </Router>
);

serviceWorkerRegistration.unregister();

reportWebVitals();
