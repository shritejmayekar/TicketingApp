import { useState } from 'react';
import TextField from '../compoent/TextField';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authAction } from '../store/auth';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(authAction.logIn(email));
    navigate('/');
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="column px-5 w-90  align-self-center">
        <TextField
          name="Email:"
          type="email"
          id="email"
          value={email}
          placeholder="Enter email"
          onChange={onChange}
        />
        <TextField
          name="Password:"
          type="password"
          id="password"
          value={password}
          placeholder="Enter password"
          onChange={onChange}
        />
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-secondary border border-dark w-90">
            Login
          </button>
        </div>
        <hr />
        <div>
          Not yet Registered ? <NavLink to="/sign-up">Sign Up here</NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
