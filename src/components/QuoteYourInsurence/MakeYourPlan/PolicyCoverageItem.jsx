import PropTypes from 'prop-types';
import './scss/PolicyCoverageItem.scss';
import { useState } from 'react';

const PolicyCoverageItem = (
  {
    item,
    onChange,
  },
) => {
  const [showContent, setShowContent] = useState(false);
  const { name, image, content } = item;

  const handleClickButton = () => {
    setShowContent(!showContent);
  };
  const handleChangeInput = () => {
    onChange(item);
  };

  return (
    <div className="policy-coverage-item d-flex">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="full-width ms-2 ps-2">
        <div className="full-width d-inline-flex justify-content-between mb-2">
          <div>
            <p className="policy-coverage-item__title title--font title--color mb-1">
              {name}
            </p>
            {!showContent && (
            <span
              role="presentation"
              className="policy-coverage-item__btn policy-coverage-item__btn--down cursor--pointer text-uppercase"
              onClick={handleClickButton}
            >
              ver más
              <span className="mx-2">
                <i className="bi bi-chevron-down" />
              </span>
            </span>
            )}
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input policy-coverage-item__input"
              type="checkbox"
              id="flexSwitchCheckChecked"
              onChange={handleChangeInput}
            />
          </div>
        </div>
        {showContent && (
        <div>
          <p>
            {content}
          </p>
          <span
            role="presentation"
            className="policy-coverage-item__btn policy-coverage-item__btn--up cursor--pointer text-uppercase"
            onClick={handleClickButton}
          >
            ver menos
            <span className="mx-2">
              <i className="bi bi-chevron-up" />
            </span>
          </span>
        </div>
        )}
      </div>
    </div>
  );
};

export default PolicyCoverageItem;

PolicyCoverageItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};
