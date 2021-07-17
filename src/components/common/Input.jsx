import PropTypes from 'prop-types';
import './scss/Input.scss';

const InputField = ({
  label,
  type = 'text',
  placeholder,
  id,
  maxLength,
  pattern,
  required = true,
}) => (
  <div className="form-floating">
    <input
      type={type}
      className="form-control"
      id={id}
      placeholder={placeholder}
      maxLength={maxLength}
      pattern={pattern}
      required={required}
    />
    <label className="label" htmlFor={id}>{label}</label>
  </div>
);

export default InputField;

InputField.defaultProps = {
  placeholder: '',
  maxLength: undefined,
  pattern: '',
  required: false,
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  pattern: PropTypes.string,
  required: PropTypes.bool,
};
