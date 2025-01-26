import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/userAuth.tsx';



const ProtectedRoute = ({ children }: React.ReactNode) => {
    const location = useLocation();
    const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{from: location}} replace />
  )
};

export default ProtectedRoute;