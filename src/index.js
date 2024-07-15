import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/App.css';
import './css/index.css';
import './css/fontAwesome.css';
import './css/reyham.css';
import './css/overide.css';
import './css/card.css';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>}/>
          <Route path="/report" element={<Layout><Report /></Layout>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Login />}/>
          <Route path="/report/:ideaid" element={<Layout><Idea /></Layout>}/>
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
