import PropTypes from 'prop-types';
import './scss/Header.scss';
import logoRimac from '../../images/logo-rimac.svg';

const Header = ({ backgroundIsTransparent }) => (
  <header className={`header header--height ${backgroundIsTransparent && 'header--transparent'}`}>
    <nav className="navbar navbar-light bg-transparent">
      <div className="container-fluid container--padding">
        <a className="navbar-brand" href="/">
          <img
            src={logoRimac}
            alt="logo Rimac"
            className="d-inline-block"
          />
        </a>
        <div className="d-md-flex">
          <span className="mx-3 d-none d-lg-block">¿Tienes alguna duda?</span>
          <p className="m-0 mx-3 d-md-flex call-message--color">
            <span className="mx-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
            </span>
            <span className="mx-1 d-none d-lg-block">(01) 411 6001</span>
            <span className="mx-1 d-lg-none">Llámanos</span>
          </p>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;

Header.defaultProps = {
  backgroundIsTransparent: false,
};

Header.propTypes = {
  backgroundIsTransparent: PropTypes.bool,
};
