import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Navbar from './compoent/Navbar';
import Home from './pages/Home';
import SignIn from './pages/SigIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Ticket from './pages/Ticket';
import PrivateRoutes from './PrivateRoutes';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path="/" element={<Home />} />
      <Route
        path="/profile"
        element={
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        }
      />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        path="/ticket"
        element={
          <PrivateRoutes>
            <Ticket />
          </PrivateRoutes>
        }
      />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
