import { useSelector } from 'react-redux';
import { FaTicket } from 'react-icons/fa6';
import { FaQuestionCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const user = useSelector((state: any) => state.auth.user);
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column mb-3 align-items-center">
      <div className="p-2">
        <h5>Welcome, {user ? user : 'Guest'}</h5>
      </div>
      <div className="p-2">
        <h1 className="text-center">What do you need help with?</h1>
        <h4 className="text-center text-body-secondary">
          Please choose from option below
        </h4>
      </div>
      <div className="d-flex flex-column w-100 gap-3 px-2">
        <button
          className="btn border border-dark"
          onClick={() => navigate('/new-ticket')}
        >
          <FaQuestionCircle />
          &nbsp;&nbsp;Create New Ticket
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => navigate('/ticket')}
        >
          <FaTicket />
          &nbsp;&nbsp;View My Tickets
        </button>
      </div>
    </div>
  );
};

export default Home;
