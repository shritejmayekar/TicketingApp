import { IoArrowBackCircleSharp } from 'react-icons/io5';
import TextField from '../compoent/TextField';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ticketAction } from '../store/ticket';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewTicket = () => {
  const auth = useSelector((state: any) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialFormData = {
    id: uuidv4(),
    email: auth,
    name: '',
    product: '',
    description: '',
    status: 'new',
    date: new Date(),
  };
  const [formData, setFormData] = useState(initialFormData);
  const { name, email, product, description } = formData;
  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const handleChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(ticketAction.create(formData));
    setFormData(initialFormData);
    toast.success('Successfully created ticket', {
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
        className="d-flex flex-column px-5  align-self-center mb-3"
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
        <label htmlFor="exampleDataList" className="form-label">
          Product:
        </label>
        <select
          className="form-select mb-3"
          id="product"
          aria-label="Default select example"
          required
          name="Product:"
          value={product}
          onChange={handleChange}
        >
          <option value="">--- select product ---</option>
          <option value="Iphone">Iphone</option>
          <option value="Macbook Air">Macbook Air</option>
          <option value="Macbook Pro">Macbook Pro</option>
          <option value="Airdopes Pro">Airdopes Pro</option>
        </select>
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
      <ToastContainer />
    </div>
  );
};

export default NewTicket;
