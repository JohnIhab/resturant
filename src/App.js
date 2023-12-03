import {Route, Routes, useNavigate } from 'react-router-dom';

import './App.css';
import Navs from './pages/Navbar/Navs';
import Login from './pages/Login/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp/SignUp';
import { useState } from 'react';

function App() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const handleSignUp = (formData) => {
    setUsers([...users, formData]);
  };

  const handleLogin = (loginData) => {
    const userExists = users.some(user => user.email === loginData.email && user.password === loginData.password);

    if (userExists) {
      alert('Login successful!');
      navigate('/login')
    } else {
      alert('Invalid email or password');
      navigate('/login')

    }
  }
  return (
    <div className='App' >
      <Navs />
      <Routes>
      {["home", "/"].map((path, index) => (
          <Route path={path} element={<Home />} key={index} />
        ))}
        <Route path='login' element={<Login onLogin={handleLogin}/>} />
        <Route path='signup' element={<SignUp onSignUp={handleSignUp}/>} />
        
      </Routes>
      </div>
  );
}

export default App;
