import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const auth = useSelector((state: any) => state.auth.isLoggedIn);
  return auth ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoutes;
