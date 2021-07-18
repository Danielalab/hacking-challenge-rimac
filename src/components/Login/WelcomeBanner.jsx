import './scss/WelcomeBanner.scss';
import imageBannerMobile from '../../images/woman-with-phone.png';
import imageBannerDesktop from '../../images/illustracion-banner-desktop.png';

const WelcomeBanner = () => (
  <section className="d-flex flex-lg-column justify-content-center
    position-relative container-fluid container--padding banner"
  >
    <figure className="banner__content--padding banner__image-dektop d-none d-lg-block">
      <img src={imageBannerDesktop} alt="mujer sonriente con un celular y auto" />
    </figure>
    <div className="banner__content--padding">
      <p className="mb-2 title--font title--color">¡Nuevo!</p>
      <h1 className="mb-3 title--font title--color">
        Seguro
        {' '}
        <span className="title__text-desktop--highlighted">Vehicular</span>
        <span className="title__text--highlighted"> Tracking</span>
      </h1>
      <p className="m-0 paragraph--color">
        Cuentanos donde le haras
        <br />
        {' '}
        seguimiento a tu seguro
      </p>
    </div>
    <figure className="banner__image-mobile d-lg-none">
      <img src={imageBannerMobile} alt="mujer sonriente con un celular y auto" />
    </figure>
  </section>
);

export default WelcomeBanner;
