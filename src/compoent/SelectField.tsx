interface SelectFieldProps {
  id: string;
  name: string;
  onChange: (e: any) => void;
  options: { key: string; value: string }[];
  className: string;
  value: string;
}
const SelectField: React.FC<SelectFieldProps> = ({
  id,
  value,
  onChange,
  name,
  options,
  className = '',
}: any) => {
  return (
    <div className={`row mb-3 ${className}`}>
      <label htmlFor="colFormLabel" className="col-md-5 col-form-label">
        {name}
      </label>
      <div className="col-md-5">
        <select
          className="form-select"
          id={id}
          aria-label="Default select"
          required
          name={name}
          value={value}
          onChange={onChange}
        >
          <option value="">--- select {id} ---</option>
          {options.map((option: any) => (
            <option key={option.key} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectField;
