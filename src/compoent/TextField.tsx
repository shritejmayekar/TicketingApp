const TextField = ({ name, id, placeholder, type, value, onChange }: any) => {
  return (
    <div className="row mb-3">
      <label htmlFor="colFormLabel" className="col-md-5 col-form-label">
        {name}
      </label>
      <div className="col-md-5">
        <input
          type={type}
          value={value}
          id={id}
          onChange={onChange}
          className="form-control"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};

export default TextField;
