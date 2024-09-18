import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/App.css';
import './css/fontAwesome.css';
import './css/reyham.css';
import './css/overide.css';
import './css/index.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home'
import Layout from './components/Layout'
import Cookies from 'universal-cookie';
import errortrans from './translate/error';
import env from './env';
import MyPage from './pages/MyPage';
import MyPageEdit from './modules/Profile/ProfileModules/My-Page-Edit';
import Help from './pages/Help';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Cowork from './pages/Cowork';
import Profile from './pages/Profile';
import CompanyFetch from './modules/Company/CompanyFetch';


const cookies = new Cookies();
const token = cookies.get(env.cookieName)
var lang = JSON.parse(localStorage.getItem(env.cookieLang));
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
      <Routes>
        <Route path="/" element={<Layout lang={lang}><Home lang={lang}/></Layout>}/>
        <Route path="/my-page" element={<Layout lang={lang}>
          <MyPage lang={lang} token={token}/></Layout>}/>
        <Route path="/my-page-edit" element={<Layout lang={lang}>
          <MyPageEdit lang={lang} token={token}/></Layout>}/>
        
        <Route path="/company/:coid/:coTitle" element={<Layout lang={lang}><CompanyFetch lang={lang}/></Layout>}/>
        <Route path="/contact" element={<Layout lang={lang}><Contact lang={lang}/></Layout>}/>
        <Route path="/help" element={<Layout lang={lang}><Help lang={lang}/></Layout>}/>
        <Route path="/faq" element={<Layout lang={lang}><FAQ lang={lang}/></Layout>}/>
        <Route path="/cowork" element={<Layout lang={lang}><Cowork lang={lang}/></Layout>}/>
        <Route path="/profile" element={<Layout lang={lang}><Profile lang={lang}/></Layout>}/>
        <Route path="/login" element={<Layout lang={lang}><Login lang={lang}/></Layout>}/>
      </Routes>
    </Router>
);

serviceWorkerRegistration.unregister();

reportWebVitals();
