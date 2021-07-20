import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
/* styles */
import './scss/SideBarSteps.scss';
/* components */
import IconCircle from '../common/IconCircle';

const SideBarSteps = ({ itemsNav, currentItem }) => (
  <div className="sidebar d-none d-lg-block container--height container--padding pe-0 pt-4">
    <nav className="nav flex-column">
      { itemsNav.map((item, index) => (
        <li key={item.id} className="nav-item">
          <Link
            className={`nav-link title--font sidebar__link px-0 ${item.id === currentItem && 'sidebar__link--active'}`}
            to={item.pathname}
          >
            <IconCircle color={`${item.id === currentItem ? 'secundary' : 'disabled'}`}>
              <>{index + 1}</>
            </IconCircle>
            <span className="ms-3">{item.content}</span>
          </Link>
        </li>
      )) }
    </nav>
  </div>
);

export default SideBarSteps;

SideBarSteps.defaultProps = {
  itemsNav: [],
};

SideBarSteps.propTypes = {
  itemsNav: PropTypes.arrayOf(PropTypes.shape({
    pathname: PropTypes.string,
    content: PropTypes.string.isRequired,
  })),
  currentItem: PropTypes.number.isRequired,
};
