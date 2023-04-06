import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { User } from './models/user';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  const [principal, setPrincipal] = useState<User>();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard currentUser={principal}/>}/>
        <Route path="/login" element={<Login currentUser={principal} setCurrentUser={setPrincipal}/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
