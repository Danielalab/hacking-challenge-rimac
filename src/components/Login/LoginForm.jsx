/* Styles */
import './scss/LoginForm.scss';
/* Components */
import Button from '../common/Button';
import InputField from '../common/Input';
import Select from '../common/Select';

const LoginForm = () => (
  <form className="form container container--padding needs-validation">
    <h2 className="form__title--color mb-4">Déjanos tus datos</h2>
    <div className="input-group mb-3">
      <Select
        id="document-type"
        required
      >
        <option value="DNI">DNI</option>
        <option value="CE">CE</option>
      </Select>
      <InputField
        label="Nro. de doc"
        type="text"
        className="form-control"
        id="document-number"
        placeholder="Nro. de doc"
        maxLength={8}
        required
      />
    </div>
    <div className="mb-3">
      <InputField
        label="Celular"
        type="text"
        className="form-control"
        id="mobile-phone"
        placeholder="Celular"
        maxLength={9}
        pattern="[0-9]{9}"
        required
      />
    </div>
    <div className="mb-3">
      <InputField
        label="Placa"
        type="text"
        className="form-control"
        id="car-palte"
        placeholder="Placa: ABC-123"
        maxLength={7}
        pattern="[a-zA-Z0-9]{3}-[0-9]{3}"
        required
      />
    </div>
    <div className="form-check mb-4">
      <input className="form-check-input" type="checkbox" id="checkbox-conditions" />
      <label className="form-check-label form-check-label--color" htmlFor="checkbox-conditions">
        Acepto la
        {' '}
        <a href="/">Política de Protección de Datos Personales</a>
        {' '}
        y los
        {' '}
        <a href="/">Términos y Condiciones</a>
        .
      </label>
    </div>
    <div>
      <Button
        type="submit"
        color="primary"
        classes="w-100"
      >
        COTÍZALO
      </Button>
    </div>
  </form>
);

export default LoginForm;
