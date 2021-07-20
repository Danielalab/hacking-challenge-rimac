import PropTypes from 'prop-types';
/* styles */
import './scss/PolicyPrice.scss';
/* components */
import Button from '../../common/Button';

const PolicyPrice = ({ total }) => (
  <div className="policy-price container-fluid py-3">
    <div className="d-flex justify-content-between">
      <div className="align-self-end">
        <p className="h2 title-font title-color mb-1">
          $
          {total}
          .00
        </p>
        <span className="policy-price__text--small text-uppercase">Mensual</span>
      </div>
      <div className="align-self-end">
        <Button classes="policy-price__button">
          <>LO QUIERO</>
        </Button>
      </div>
    </div>
  </div>
);

export default PolicyPrice;

PolicyPrice.propTypes = {
  total: PropTypes.number.isRequired,
};
