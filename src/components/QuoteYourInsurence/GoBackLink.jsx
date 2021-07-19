import { useHistory } from 'react-router-dom';
import './scss/GoBackLink.scss';
import IconCircle from '../common/IconCircle';

const GoBackLink = () => {
  const history = useHistory();
  const handleClickToGoBack = (event) => {
    event.preventDefault();
    history.goBack();
  };
  return (
    <a href="/#" className="go-back-link text-decoration-none d-none d-lg-block" onClick={handleClickToGoBack}>
      <IconCircle color="primary-outline">
        <i className="bi bi-chevron-left" />
      </IconCircle>
      <span className="go-back-link__text ms-3 text-uppercase">volver</span>
    </a>
  );
};

export default GoBackLink;
