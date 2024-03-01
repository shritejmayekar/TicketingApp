import { useDispatch, useSelector } from 'react-redux';
import { counterAction } from '../store/counter';
import { authAction } from '../store/auth';

const Home = () => {
  const user = useSelector((state: any) => state.auth.user);

  return (
    <>
      <h1>Home</h1>
      <h3>Welcome, {user ? user : 'Guest'}</h3>
    </>
  );
};

export default Home;
