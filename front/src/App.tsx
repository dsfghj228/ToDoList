import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import TasksPage from './Pages/TasksPage.tsx';
import LoginPage from './Pages/LoginPage.tsx';
import ProfilePage from './Pages/ProfilePage.tsx';
import RegisterPage from './Pages/RegisterPage.tsx';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<TasksPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/profile" element={<ProfilePage />}/>
        </Routes>
    </div>
  );
}

export default App;
