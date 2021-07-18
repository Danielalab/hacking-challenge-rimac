import PropTypes from 'prop-types';
import './scss/Button.scss';

const Button = ({
  type,
  color,
  classes,
  children,
  size,
}) => (
  // eslint-disable-next-line react/button-has-type
  <button className={`btn button button--${color} ${size && `button--${size}`} ${classes}`} type={type}>
    {children}
  </button>
);

export default Button;

Button.defaultProps = {
  type: 'button',
  color: 'primary',
  classes: '',
  size: null,
};

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  classes: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.element.isRequired,
};
