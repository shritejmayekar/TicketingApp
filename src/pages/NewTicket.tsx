import { IoArrowBackCircleSharp } from 'react-icons/io5';
import TextField from '../compoent/TextField';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NewTicket = () => {
  const auth = useSelector((state: any) => state.auth.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: auth,
    name: '',
    product: '',
    description: '',
  });
  const { name, email, product, description } = formData;
  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="d-flex flex-column gap-3 py-2 px-2">
      <button
        className="btn border border-black w-25"
        onClick={() => navigate('/')}
      >
        <IoArrowBackCircleSharp />
        <span className="px-2 text-dark">
          <b>Back</b>
        </span>
      </button>
      <div className="d-flex flex-column p-2  align-items-center justify-content-center">
        <h3> Create New Ticket</h3>
        <h5 className="text-secondary">Please fill out the form below</h5>
      </div>
      <form
        onSubmit={onSubmit}
        className="column px-5 w-90  align-self-center mb-3"
      >
        <TextField
          name="Customer Name:"
          type="text"
          id="name"
          value={name}
          placeholder="Enter Customer Name"
          onChange={onChange}
        />
        <TextField
          name="Customer Email:"
          type="email"
          id="email"
          value={email}
          placeholder="Enter Customer Email"
          onChange={onChange}
        />
        <TextField
          name="Product:"
          type="text"
          id="product"
          value={product}
          placeholder="Enter Product"
          onChange={onChange}
        />
        <TextField
          name="Description of the issue:"
          type="textarea"
          id="description"
          value={description}
          placeholder="Enter Description"
          onChange={onChange}
        />
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-dark w-90">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTicket;
