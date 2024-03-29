interface TextFieldProps {
  id: string;
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: any) => void;
  className: string | '';
  disabled: boolean;
}
const TextField: React.FC<TextFieldProps> = ({
  id,
  name,
  placeholder,
  type,
  value,
  onChange,
  className = '',
  disabled = false,
}: any) => {
  return (
    <div className={`row mb-3 ${className}`}>
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
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default TextField;
