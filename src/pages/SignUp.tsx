import { useState } from 'react';
import TextField from '../compoent/TextField';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authAction } from '../store/auth';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    dispatch(authAction.logIn(email));
    navigate('/');
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="column px-5 w-90  align-self-center">
        <TextField
          name="Name:"
          type="text"
          id="name"
          value={name}
          placeholder="Enter name"
          onChange={onChange}
        />
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
    </div>
  );
};

export default SignUp;
