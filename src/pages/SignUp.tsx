import { useState } from 'react';
import TextField from '../compoent/TextField';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authAction } from '../store/auth';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../firebaseConfig';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HashLoader from 'react-spinners/HashLoader';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { email, name, password } = formData;
  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          toast.success('Registered user', {
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
          setTimeout(() => {
            dispatch(authAction.logIn(user.email));
            navigate('/');
            setLoading(false);
          }, 5000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + '' + errorMessage);
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
          setLoading(false);

          // ..
        });
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };
  return (
    <div>
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
            name="Name:"
            type="text"
            id="name"
            value={name}
            placeholder="Enter name"
            onChange={onChange}
            className="mt-4"
            disabled={false}
          />
          <TextField
            name="Email:"
            type="email"
            id="email"
            value={email}
            placeholder="Enter email"
            onChange={onChange}
            className=""
            disabled={false}
          />
          <TextField
            name="Password:"
            type="password"
            id="password"
            value={password}
            placeholder="Enter password"
            onChange={onChange}
            className=""
            disabled={false}
          />
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-secondary border border-black w-90"
            >
              Register
            </button>
          </div>
          <hr />
          <div>
            Already Registered ? <NavLink to="/sign-in">SignIn here</NavLink>
          </div>
        </form>
      )}
      <ToastContainer />
    </div>
  );
};

export default SignUp;
