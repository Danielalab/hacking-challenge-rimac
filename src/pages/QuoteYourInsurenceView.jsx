import { useContext, useState } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';
import SideBarSteps from '../components/QuoteYourInsurence/SideBarSteps';
import CarDataForm from '../components/QuoteYourInsurence/CarDataForm';
import StepsProgress from '../components/QuoteYourInsurence/StepsProgress';
import { getCurrentYear } from '../components/utils';
import { UserContext } from '../context/UserContext';

const QuoteYourInsurenceView = () => {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();

  const currentYear = getCurrentYear();
  const [yearOfCar, setYearOfCar] = useState(currentYear);
  const [modelOfCar, setmodelOfCar] = useState('Wolkswagen');
  const { name } = (useContext(UserContext).user || { name: '' });
  const steps = [
    { id: 1, content: 'Datos del auto', pathname: `${path}/datos-del-auto` },
    { id: 2, content: 'Arma tu plan', pathname: `${path}/arma-tu-plan` },
  ];
  const currentStep = steps.find((step) => step.pathname === pathname);
  const currentStepIndex = steps.findIndex((step) => step.pathname === pathname);

  return (
    <div className="container-fluid position relative">
      <div className="row">
        <StepsProgress steps={steps.length} currentStep={currentStepIndex + 1} />
        <div className="position-absolute col-lg-3 p-0">
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
                arma tu plan component
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </div>
  );
};

export default QuoteYourInsurenceView;
