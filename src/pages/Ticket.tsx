import { useNavigate } from 'react-router-dom';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';

const Ticket = () => {
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.auth.user);

  let tickets = useSelector((state: any) => state.ticket.tickets);
  if (tickets.length > 0) {
    tickets = tickets.filter(
      (ticket: { email: string }) => ticket.email === user
    );
  }
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
        <div className="d-flex flex-column align-items-center">
          <h1>Tickets</h1>
        </div>
        <div className="d-flex">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Product</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map(({ date, id, product, status }: any) => (
                <tr key={id}>
                  <td>{date.toLocaleString('en-IN')}</td>
                  <td>{product}</td>
                  <td colSpan={2}>
                    <button
                      className={
                        status == 'new' ? 'btn btn-success' : 'btn btn-danger'
                      }
                    >
                      {status}
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn border border-black"
                      onClick={() => navigate(`/ticket/${id}`)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <div className="d-md-flex flex-md-wrap gap-2">
          {tickets.map(({ name, id, product, description }: any) => (
            <div className="card mb-2" key={id}>
              <div className="card-body">
                <h5 className="card-title">User:&nbsp;{name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Product:&nbsp;{product}
                </h6>
                <p className="card-text">
                  Defect Description:&nbsp;{description}
                </p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Ticket;
