/* styles */
import './scss/HelpCardToFindCarModel.scss';
import iconCar from '../../images/icon_car.svg';

const HelpCardToFindCarModel = () => (
  <div className="help-card--background d-flex align-items-center p-3 mb-3">
    <figure className="mx-1 mb-0">
      <img src={iconCar} alt="ícono de un carro" />
    </figure>
    <p className="mx-1 mb-0">
      ¿No encuentras el modelo?
      <br />
      <span className="help-card__link title--font">CLIC AQUÍ</span>
    </p>
  </div>
);

export default HelpCardToFindCarModel;
