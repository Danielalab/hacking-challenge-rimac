import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import CarDataView from '../components/QuoteYourInsurence/CarDataView';
import StepsProgress from '../components/QuoteYourInsurence/StepsProgress';

const QuoteYourInsurenceView = () => {
  const { path } = useRouteMatch();
  return (
    <div className="container-fluid">
      <StepsProgress />
      <Switch>
        <Route path={`${path}/datos-del-auto`}>
          <CarDataView />
        </Route>
        <Route path={`${path}/arma-tu-plan`}>
          arma tu plan component
        </Route>
      </Switch>
    </div>
  );
};

export default QuoteYourInsurenceView;
