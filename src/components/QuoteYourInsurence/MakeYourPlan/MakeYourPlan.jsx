import { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
/* styles */
import './scss/MakeYourPlan.scss';
/* components */
import GoBackLink from '../GoBackLink';
import CarModelCard from './CarModelCard';
import Tabs from './Tabs';
import PolicyCoverageItem from './PolicyCoverageItem';
/* data */
import policyCoverages from './policyCoverages';
import PolicyPrice from './PolicyPrice';
import { getTotalMonthPrice } from '../../utils';

const MakeYourPlan = ({ yearOfCar, modelOfCar, plateOfCar }) => {
  const { url } = useRouteMatch();
  const categories = [
    { pathname: `${url}`, name: 'Protege a tu auto' },
    { pathname: `${url}`, name: 'Protege a los que te rodean' },
    { pathname: `${url}`, name: 'mejora tu plan' },
  ];
  const baseMonthPrice = 20;
  const [currentCategory, setCurrentCategory] = useState(categories[0].name);
  const [policyCoveragesAdded, setPolicyCoveragesAdded] = useState([]);

  const addPolicyCoverage = (policyCoverage, operation) => {
    let newPolicyCoveragesAddedList = [];
    if (policyCoveragesAdded.length === 0) {
      newPolicyCoveragesAddedList.push(policyCoverage);
    } else if (operation === 'ADD') {
      newPolicyCoveragesAddedList = [...policyCoveragesAdded, policyCoverage];
    } else if (operation === 'DELETE') {
      newPolicyCoveragesAddedList = policyCoveragesAdded.filter(
        (item) => item.id !== policyCoverage.id,
      );
    }
    setPolicyCoveragesAdded(newPolicyCoveragesAddedList);
  };

  const handleClickTabs = (tabName) => {
    setCurrentCategory(tabName);
  };

  return (
    <div className="cardata">
      <div className="cardata__button--back">
        <GoBackLink />
      </div>
      <div>
        <div className="policy-coverages__section policy-coverages__section--background container-fluid">
          <section>
            <h2 className="title--color my-2">Mira las coberturas</h2>
            <p className="pb-4 mb-2">Conoce las coberturas para tu plan</p>
            <div className="row">
              <div className="col">
                <CarModelCard plate={plateOfCar} model={modelOfCar} year={yearOfCar} />
              </div>
            </div>
          </section>
        </div>
        <div className="policy-coverages__section container-fluid">
          <section>
            <h2 className="title--color my-2">Agrega o quita coberturas</h2>
            <p className="pb-4 mb-2">Conoce las coberturas para tu plan</p>
            <div className="row">
              <div className="col">
                <Tabs
                  items={categories}
                  currentTab={currentCategory}
                  onClick={handleClickTabs}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                {policyCoverages
                  .filter((item) => item.type === currentCategory)
                  .map((item) => (
                    <PolicyCoverageItem
                      key={item.id}
                      item={item}
                      onChange={addPolicyCoverage}
                    />
                  ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="fixed-bottom">
        <PolicyPrice
          total={getTotalMonthPrice(policyCoveragesAdded, baseMonthPrice)}
        />
      </div>
    </div>
  );
};

export default MakeYourPlan;

MakeYourPlan.propTypes = {
  yearOfCar: PropTypes.number.isRequired,
  modelOfCar: PropTypes.string.isRequired,
  plateOfCar: PropTypes.string.isRequired,
};
