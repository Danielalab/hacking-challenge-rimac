import PropTypes from 'prop-types';
import './scss/Select.scss';

const Select = ({
  id,
  children,
  required,
}) => (
  <select className="form-select select--color" id={id} required={required}>
    {children}
  </select>
);

Select.defaultProps = {
  required: false,
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  required: PropTypes.bool,
};

export default Select;
