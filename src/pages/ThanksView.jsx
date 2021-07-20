/* components */
import Button from '../components/common/Button';
/* styles */
import './scss/Thanks.scss';
import imageMobile from '../images/man-banner-thanks-mobile.png';
import imageDesktop from '../images/man-banner-thanks.png';

const ThanksView = () => (
  <div className="container-fluid">
    <div className="row container--full-height">
      <figure className="thanks-view__figure position-relative col col-lg-4 p-0 mb-0">
        <picture>
          <source media="(min-width: 992px)" srcSet={imageDesktop} />
          <img src={imageMobile} alt="hombre sonriente en casa" />
        </picture>
      </figure>
      <div className="col container-fluid thanks-view__message-container">
        <div className="">
          <h2 className="title title--font title--color thanks-view__title">
            <span className="title__text--highlighted">
              ¡Te damos la bienvenida!
            </span>
            <br />
            Cuenta con nosotros para proteger tu vehículo
          </h2>
          <p className="thanks-view__text mb-3">
            Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:
            <br />
            <span className="fw-bold">
              joel.sanchez@gmail.com
            </span>
          </p>
          <Button classes="thanks-view__button">
            cómo usar mi seguro
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default ThanksView;
