import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/common/Header';
import LoginView from './pages/LoginView';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/">
            <LoginView />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
