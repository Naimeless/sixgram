import React from 'react';
import './style/App.css';
import News from './pages/news/News';
import Profile from './pages/profile/Profile';
import {Authorization} from './pages/authorization/Authorization';
import Registration from "./pages/registration/Registration";

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<News />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/authorization" element={<Authorization/>} />
          <Route path="/registration" element={<Registration/>} />
      </Routes>
    </>
  );
}

export default App;
