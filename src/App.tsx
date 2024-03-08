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
import AuthRoutes from './AuthRoutes';
import NewTicket from './pages/NewTicket';
import DetailTicket from './pages/DetailTicket';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path="/" element={<Home />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/new-ticket" element={<NewTicket />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/ticket/:id" element={<DetailTicket />} />
      </Route>
      <Route element={<AuthRoutes />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
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
