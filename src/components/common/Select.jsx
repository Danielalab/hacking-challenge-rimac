import PropTypes from 'prop-types';
import './scss/Select.scss';

const Select = ({
  id,
  label,
  children,
  required,
  floating,
  ...rest
}) => {
  const SelectElement = () => (
    <select
      {...rest}
      className="form-select select--color"
      id={id}
      required={required}
      aria-label={label}
    >
      {children}
    </select>
  );

  return (
    floating
      ? (
        <div className="form-floating">
          <SelectElement />
          {label && <label htmlFor={id}>{label}</label>}
        </div>
      )
      : <SelectElement />
  );
};

Select.defaultProps = {
  required: false,
  floating: true,
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  required: PropTypes.bool,
  floating: PropTypes.bool,
};

export default Select;
