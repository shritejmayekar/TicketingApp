const TextField = ({ name, id, placeholder, type, value, onChange }: any) => {
  return (
    <div className="row mb-3">
      <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
        {name}
      </label>
      <div className="col-sm-10">
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
