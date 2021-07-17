import LoginForm from '../components/Login/LoginForm';
import WelcomeBanner from '../components/Login/WelcomeBanner';

const LoginView = () => (
  <div className="container-fluid">
    <div className="row container--height">
      <div className="col-lg-5 p-0">
        <WelcomeBanner />
      </div>
      <div className="col-lg-7 p-0">
        <LoginForm />
      </div>
    </div>
  </div>
);

export default LoginView;
