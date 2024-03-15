import { IoArrowBackCircleSharp } from 'react-icons/io5';
import TextField from '../compoent/TextField';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ticketAction } from '../store/ticket';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SelectField from '../compoent/SelectField';
import TextArea from '../compoent/TextArea';

const options = [
  { key: 'iphone', value: 'Iphone' },
  { key: 'macbook-air', value: 'Macbook Air' },
  { key: 'macbook-pro', value: 'Macbook Pro' },
  { key: 'airdopes-pro', value: 'Airdopes Pro' },
];
const NewTicket = () => {
  const auth = useSelector((state: any) => state.auth.user);
  const [productOptions] = useState(options);
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
    <>
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
      </div>
      <form onSubmit={onSubmit} className="column px-5 w-90  align-self-center">
        <TextField
          name="Customer Name:"
          type="text"
          id="name"
          value={name}
          placeholder="Enter Customer Name"
          onChange={onChange}
          className={''}
          disabled={false}
        />
        <TextField
          name="Customer Email:"
          type="email"
          id="email"
          value={email}
          placeholder="Enter Customer Email"
          onChange={onChange}
          className={''}
          disabled={false}
        />
        <SelectField
          id="product"
          name="Product:"
          value={product}
          onChange={handleChange}
          options={productOptions}
          className={''}
        />
        <TextArea
          name="Description of the issue:"
          id="description"
          value={description}
          placeholder="Enter Description"
          onChange={onChange}
          className={''}
        />
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-dark w-90">
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default NewTicket;
