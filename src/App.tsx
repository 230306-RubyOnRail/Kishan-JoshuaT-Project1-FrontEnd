import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Nav from './components/Nav';
import Reimbursement from './components/Reimbursement';
import { User } from './models/user';



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
