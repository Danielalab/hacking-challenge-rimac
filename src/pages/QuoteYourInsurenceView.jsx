import { useContext, useState } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';
/* styles */
import './scss/QuoteYourInsurence.scss';

/* components */
import SideBarSteps from '../components/QuoteYourInsurence/SideBarSteps';
import CarDataForm from '../components/QuoteYourInsurence/CarData/CarDataForm';
import StepsProgress from '../components/QuoteYourInsurence/StepsProgress';
import { getCurrentYear } from '../components/utils';
import { UserContext } from '../context/UserContext';
import MakeYourPlan from '../components/QuoteYourInsurence/MakeYourPlan/MakeYourPlan';

const QuoteYourInsurenceView = () => {
  const { path, url } = useRouteMatch();
  const { pathname } = useLocation();

  const currentYear = getCurrentYear();
  const [yearOfCar, setYearOfCar] = useState(currentYear);
  const [modelOfCar, setmodelOfCar] = useState('Wolkswagen');
  const { name, carPlate } = (useContext(UserContext).user || { name: '', plate: '' });
  const steps = [
    { id: 1, content: 'Datos del auto', pathname: `${url}/datos-del-auto` },
    { id: 2, content: 'Arma tu plan', pathname: `${url}/arma-tu-plan` },
  ];
  const currentStep = steps.find((step) => step.pathname === pathname);
  const currentStepIndex = steps.findIndex((step) => step.pathname === pathname);

  return (
    <div className="container-fluid position-relative view--position">
      <div className="row">
        <StepsProgress steps={steps.length} currentStep={currentStepIndex + 1} />
        <div className="position-fixed col-lg-3 p-0">
          <SideBarSteps itemsNav={steps} currentItem={currentStep.id} />
        </div>
        <div className="col-lg-9 offset-lg-3 p-0 container-fluid">
          <main>
            <Switch>
              <Route path={`${path}/datos-del-auto`}>
                <CarDataForm {
                ... {
                  yearOfCar,
                  setYearOfCar,
                  modelOfCar,
                  setmodelOfCar,
                  clientName: name,
                }
              }
                />
              </Route>
              <Route path={`${path}/arma-tu-plan`}>
                <MakeYourPlan
                  yearOfCar={yearOfCar}
                  modelOfCar={modelOfCar}
                  plateOfCar={carPlate}
                />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </div>
  );
};

export default QuoteYourInsurenceView;
