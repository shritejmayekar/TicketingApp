import { useNavigate } from 'react-router-dom';
import { IoArrowBackCircleSharp } from 'react-icons/io5';

const Ticket = () => {
  const navigate = useNavigate();
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
      <div className="p2">
        <h1>List of tickets</h1>
      </div>
    </div>
  );
};

export default Ticket;
