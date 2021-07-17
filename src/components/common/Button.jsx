import PropTypes from 'prop-types';
import './scss/Button.scss';

const Button = ({
  type,
  color,
  classes,
  children,
}) => (
  // eslint-disable-next-line react/button-has-type
  <button className={`btn button button-${color} ${classes}`} type={type}>
    {children}
  </button>
);

export default Button;

Button.defaultProps = {
  type: 'button',
  color: 'primary',
  classes: '',
};

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.element.isRequired,
};
