import './scss/WelcomeBanner.scss';
import imageBannerMobile from '../../images/woman-with-phone.png';

const WelcomeBanner = () => (
  <section className="d-flex position-relative container container--padding banner">
    <div>
      <p className="mb-2 title--font title--color">¡Nuevo!</p>
      <h1 className="mb-3 title--font title--color">
        Seguro Vehicular
        <span> Tracking</span>
      </h1>
      <p className="m-0 paragraph--color">
        Cuentanos donde le haras
        <br />
        {' '}
        seguimiento a tu seguro
      </p>
    </div>
    <figure className="banner__image-mobile">
      <img src={imageBannerMobile} alt="mujer sonriente con un celular y auto" />
    </figure>
  </section>
);

export default WelcomeBanner;
