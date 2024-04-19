import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import './i18n';
import { Suspense } from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
     <Router>
      <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>} />
      </Routes>
      </Router>
      </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();