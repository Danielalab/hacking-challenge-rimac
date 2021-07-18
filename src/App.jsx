import { useState } from 'react';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

/* Components */
import Header from './components/common/Header';
import LoginView from './pages/LoginView';

/* Context */
import { UserContext } from './context/UserContext';
import QuoteYourInsurenceView from './pages/QuoteYourInsurenceView';

function App() {
  const [user, setUser] = useState(null);
  const { pathname } = useLocation();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <Header backgroundIsTransparent={pathname === '/'} />
        <Switch>
          <Route exact path="/">
            <LoginView />
          </Route>
          <Route path="/cotiza-tu-seguro">
            <QuoteYourInsurenceView />
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
