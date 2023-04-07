import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import Reimbursement from './components/Reimbursement';
import { User } from './models/user';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

  const [principal, setPrincipal] = useState<User>();

  return (
    <BrowserRouter>
    <Nav currentUser={principal} setCurrentUser={setPrincipal}/>
      <Routes>
        <Route path="/" element={<Dashboard currentUser={principal}/>}/>
        <Route path="/login" element={<Login currentUser={principal} setCurrentUser={setPrincipal}/>}/>
        <Route path="/reimbursement" element={<Reimbursement currentUser={principal}/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
