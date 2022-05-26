import React, { useState, useEffect } from 'react';
import './style/App.css';
import News from './pages/news/News';
import Profile from './pages/profile/Profile';
import {Authorization} from './pages/authorization/Authorization';
import Registration from "./pages/registration/Registration";

import { Routes, Route, useNavigate } from 'react-router-dom';
import getToken from './utils/getToken';


function App() {

  const [isLoggenIn, setIsLoggenIn] = useState(getToken());
  const navigate = useNavigate();

  useEffect(()=>{
    if (!isLoggenIn){
      navigate('/authorization');
      return;
    }
    navigate('/');
  }, [isLoggenIn])

  return (
    <Routes>
        <Route path="/authorization" element={<Authorization setIsLoggenIn={(value) => setIsLoggenIn(value)} />} />
        <Route path="/registration" element={<Registration setIsLoggenIn={setIsLoggenIn}/>} />
        <Route path="/" element={<News />} />
        <Route path="/profile" element={<Profile />}  />
    </Routes>
  );
}


export default App;
