import { useState } from 'react';
import TextField from '../compoent/TextField';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authAction } from '../store/auth';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../firebaseConfig';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HashLoader from 'react-spinners/HashLoader';
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const { email, password } = formData;
  const [loading, setLoading] = useState<boolean>(false);
  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success('Successfully Logged In', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          transition: Zoom,
        });
        setIsDisabled(true);
        setTimeout(() => {
          dispatch(authAction.logIn(user.email));
          navigate('/');
          setLoading(false);
        }, 5000);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setLoading(false);
        toast.error(errorMessage, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          transition: Zoom,
        });
      });
  };
  return (
    <div className="mb-5">
      {loading && (
        <>
          <HashLoader
            color="#36d7b7"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          />
        </>
      )}
      {!loading && (
        <form
          onSubmit={onSubmit}
          className="column px-5 w-90  align-self-center"
        >
          <TextField
            name="Email:"
            type="email"
            id="email"
            value={email}
            placeholder="Enter email"
            onChange={onChange}
            className="mt-4"
            disabled={isDisabled}
          />
          <TextField
            name="Password:"
            type="password"
            id="password"
            value={password}
            placeholder="Enter password"
            onChange={onChange}
            className=""
            disabled={isDisabled}
          />
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-secondary border border-dark w-90"
            >
              Login
            </button>
          </div>
          <hr />
          <div>
            Not yet Registered ? <NavLink to="/sign-up">Sign Up here</NavLink>
          </div>
        </form>
      )}
      <ToastContainer />
    </div>
  );
};

export default SignIn;
