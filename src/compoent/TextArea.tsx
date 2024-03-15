interface TextAreaFieldProps {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
  className: string | '';
}
const TextArea: React.FC<TextAreaFieldProps> = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  className = '',
}: any) => {
  return (
    <div className={`row mb-3 ${className}`}>
      <label htmlFor="colFormLabel" className="col-md-5 col-form-label">
        {name}
      </label>
      <div className="col-md-5">
        <textarea
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

export default TextArea;
