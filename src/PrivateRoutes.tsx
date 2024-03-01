import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }: any) => {
  const auth = useSelector((state: any) => state.auth.isLoggedIn);
  return auth ? children : <Navigate to="/sign-in" />;
};

export default PrivateRoutes;
