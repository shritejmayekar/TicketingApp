import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FaTicket } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../store/auth';
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let location = useLocation();

  const navigateTo = (url: string) => {
    navigate(url);
  };
  const user = useSelector((state: any) => state.auth.user);
  return (
    <>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <FaTicket />
            <span className="mx-1">Ticketing App</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" onClick={() => navigateTo('/')}>
                <a
                  className={
                    location.pathname === '/' ? 'nav-link active' : 'nav-link'
                  }
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item" onClick={() => navigateTo('/profile')}>
                <a
                  className={
                    location.pathname === '/profile'
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                  aria-current="page"
                  href="#"
                >
                  Profile
                </a>
              </li>
              {!user && (
                <>
                  <li
                    className="nav-item"
                    onClick={() => navigateTo('/sign-in')}
                  >
                    <a
                      className={
                        location.pathname === '/sign-in'
                          ? 'nav-link active'
                          : 'nav-link'
                      }
                      aria-current="page"
                      href="#"
                    >
                      SignIn
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => navigateTo('/sign-up')}
                  >
                    <a
                      className={
                        location.pathname === '/sign-up'
                          ? 'nav-link active'
                          : 'nav-link'
                      }
                      aria-current="page"
                      href="#"
                    >
                      SignUp
                    </a>
                  </li>
                </>
              )}
              <li className="nav-item" onClick={() => navigateTo('/ticket')}>
                <a
                  className={
                    location.pathname === '/ticket'
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                  aria-current="page"
                  href="#"
                >
                  Ticket
                </a>
              </li>
              {user && (
                <li
                  className="nav-item"
                  onClick={() => dispatch(authAction.logOut())}
                >
                  <a className="nav-link" aria-current="page" href="#">
                    Logout
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
