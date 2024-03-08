import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { ticketAction } from '../store/ticket';

const DetailTicket = () => {
  const navigate = useNavigate();
  const { id: paramID } = useParams();
  const dispatch = useDispatch();
  const { id, email, name, product, description, status, date } = useSelector(
    (state: any) =>
      state.ticket.tickets.filter(
        (ticket: { id: string }) => ticket.id === paramID
      )[0]
  );
  const updateTicket = () => {
    dispatch(
      ticketAction.update({
        id,
        email,
        name,
        product,
        description,
        status: 'closed',
        date,
      })
    );
  };
  return (
    <div className="d-flex flex-column gap-3 py-2 px-2">
      <button
        className="btn border border-black w-25"
        onClick={() => navigate('/ticket')}
      >
        <IoArrowBackCircleSharp />
        <span className="px-2 text-dark">
          <b>Back</b>
        </span>
      </button>
      <div className="card border-secondary mb-3">
        <div className="card-header d-flex justify-content-between">
          <div>Ticket Id: {id} </div>
          <button
            className={status == 'new' ? 'btn btn-success' : 'btn btn-danger'}
          >
            {status}
          </button>
        </div>
        <div className="card-body text-secondary">
          <h5 className="card-title">Product: {product} </h5>
          <h5 className="card-title">
            Date Created: {date.toLocaleString('en-IN')}{' '}
          </h5>
          <h6 className="card-title">Description:</h6>
          <p className="card-text bg-body-secondary p-2">{description}</p>
        </div>
      </div>
      <div className="d-grid gap-2" onClick={updateTicket}>
        <button
          type="button"
          disabled={status === 'closed' ? true : false}
          className="btn btn btn-danger w-90"
        >
          Close Ticket
        </button>
      </div>
    </div>
  );
};

export default DetailTicket;
