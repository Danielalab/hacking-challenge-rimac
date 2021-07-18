import {
  Switch,
  Route,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';
import CarDataForm from '../components/QuoteYourInsurence/CarDataForm';
import StepsProgress from '../components/QuoteYourInsurence/StepsProgress';

const QuoteYourInsurenceView = () => {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();
  const steps = [
    { name: 'Datos del auto', pathname: `${path}/datos-del-auto` },
    { name: 'Arma tu plan', pathname: `${path}/arma-tu-plan` },
  ];
  const currentStep = steps.findIndex((step) => step.pathname === pathname);

  return (
    <div className="container-fluid">
      <div className="row">
        <StepsProgress steps={steps.length} currentStep={currentStep + 1} />
        <div className="col-lg-7 p-0">
          <Switch>
            <Route path={`${path}/datos-del-auto`}>
              <CarDataForm />
            </Route>
            <Route path={`${path}/arma-tu-plan`}>
              arma tu plan component
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default QuoteYourInsurenceView;
