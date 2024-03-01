import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoutes = () => {
  const auth = useSelector((state: any) => state.auth.isLoggedIn);
  return auth ? <Navigate to="/" replace /> : <Outlet />;
};

export default AuthRoutes;
