import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './pages/signup';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Login from './pages/login';
import Forget from './pages/forgot-password';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/forget" element={<Forget/>}></Route>
  </Routes>
 </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
