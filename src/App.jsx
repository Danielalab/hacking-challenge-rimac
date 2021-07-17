import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

/* Components */
import Header from './components/common/Header';
import LoginView from './pages/LoginView';

/* Context */
import { UserContext } from './context/UserContext';

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
    </UserContext.Provider>
  );
}

export default App;
