import React from 'react';
import './style/App.css';
import News from './pages/news/News';
import Profile from './pages/profile/Profile';

import { Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
