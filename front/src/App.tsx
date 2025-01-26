import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./Context/userAuth.tsx"; // Путь к вашему контексту
import TasksPage from "./Pages/TasksPage.tsx";
import LoginPage from "./Pages/LoginPage.tsx";
import ProfilePage from "./Pages/ProfilePage.tsx";
import RegisterPage from "./Pages/RegisterPage.tsx";
import ProtectedRoute from "./Routes/ProtectedRoute.tsx";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <TasksPage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
