import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/App.css';
import './css/fontAwesome.css';
import './css/reyham.css';
import './css/overide.css';

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
import About from './pages/About';
import Help from './pages/Help';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Safety from './pages/Safety';
import Join from './pages/Join';


const cookies = new Cookies();
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
        <Route path="/about" element={<Layout lang={lang}><About lang={lang}/></Layout>}/>
        <Route path="/contact" element={<Layout lang={lang}><Contact lang={lang}/></Layout>}/>
        <Route path="/help" element={<Layout lang={lang}><Help lang={lang}/></Layout>}/>
        <Route path="/faq" element={<Layout lang={lang}><FAQ lang={lang}/></Layout>}/>
        <Route path="/safety" element={<Layout lang={lang}><Safety lang={lang}/></Layout>}/>
        <Route path="/join" element={<Layout lang={lang}><Join lang={lang}/></Layout>}/>
      </Routes>
    </Router>
);

serviceWorkerRegistration.unregister();

reportWebVitals();
