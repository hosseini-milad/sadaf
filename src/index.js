import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/App.css';
import './css/index.css';
import './css/fontAwesome.css';
import './css/reyham.css';
import './css/overide.css';
import './css/card.css';
import './css/form.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './Pages/Home'

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Layout from './Components/Layout';
import Login from './Pages/Login';
import Report from './Pages/Report';
import Idea from './Pages/Idea';
import RegReq from './Pages/RegReq';
import Cookies from 'universal-cookie';
import env from './env';
import Profile from './Pages/Profile';
const cookies = new Cookies();
const token = cookies.get(env.cookieName)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>}/>
          <Route path="/report" element={<Layout><Report /></Layout>}/>
          <Route path="/login" element={<Layout><Login /></Layout>}/>
          <Route path="/register" element={<Layout><Login /></Layout>}/>
          <Route path="/report/:ideaid" element={<Layout><Idea /></Layout>}/>

          <Route path="/profile" element={<Layout><Profile token={token}/></Layout>}/>
          
          <Route path="/reg-request" element={<Layout><RegReq token={token}/></Layout>}/>
        </Routes>
    </Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
