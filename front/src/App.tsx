import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import TasksPage from './Pages/TasksPage.tsx';
import LoginPage from './Pages/LoginPage.tsx';
import AuthPage from './Pages/AuthPage.tsx';
import ProfilePage from './Pages/ProfilePage.tsx';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<TasksPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/auth" element={<AuthPage />}/>
          <Route path="/profile" element={<ProfilePage />}/>
        </Routes>
    </div>
  );
}

export default App;
