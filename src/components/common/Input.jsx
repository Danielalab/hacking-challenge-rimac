import PropTypes from 'prop-types';
import './scss/Input.scss';

const InputField = ({
  label,
  type = 'text',
  placeholder,
  id,
  maxLength,
  ariaLabel,
  pattern,
  required,
  floating,
  classes,
  ...rest
}) => {
  const InputElement = () => (
    <input
      {...rest}
      type={type}
      className={`form-control ${classes}`}
      id={id}
      placeholder={placeholder}
      aria-label={label || ariaLabel}
      maxLength={maxLength}
      pattern={pattern}
      required={required}
    />
  );
  const LabelElement = () => (
    <label className="label" htmlFor={id}>{label}</label>
  );
  return (
    floating
      ? (
        <div className="form-floating">
          <InputElement />
          {label && <LabelElement />}
        </div>
      )
      : (
        <>
          <InputElement />
          {label && <LabelElement />}
        </>
      )
  );
};

export default InputField;

InputField.defaultProps = {
  label: null,
  placeholder: '',
  maxLength: undefined,
  pattern: '',
  ariaLabel: null,
  floating: true,
  classes: '',
  required: false,
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  ariaLabel: PropTypes.string,
  pattern: PropTypes.string,
  classes: PropTypes.string,
  required: PropTypes.bool,
  floating: PropTypes.bool,
};
