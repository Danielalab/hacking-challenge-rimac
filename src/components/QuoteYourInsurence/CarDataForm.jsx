import { useState } from 'react';
/* styles */
import './scss/CarDataForm.scss';
/* controllers */
import { eventHandler } from '../utils';
/* Components */
import Button from '../common/Button';
import Select from '../common/Select';
import InputField from '../common/Input';
import HelpCardToFindCarModel from './HelpCardToFindCarModel';

const yearsList = (currentYear) => {
  const optionsList = [];
  for (let index = 1990; index <= currentYear; index += 1) {
    const element = <option key={index} value={index}>{index}</option>;
    optionsList.push(element);
  }
  return optionsList;
};

const carModelsList = ['Audi', 'BMW', 'Ford', 'Mercedes-Benz', 'Nissan', 'Renault', 'Toyota', 'Wolkswagen'];

const CarDataForm = () => {
  const currentYear = new Date().getFullYear();
  const [yearOfCar, setYearOfCar] = useState(currentYear);
  const [modelOfCar, setmodelOfCar] = useState('Wolkswagen');
  const [totalSumInsured, setTotalSumInsured] = useState(14300);

  return (
    <form className="form container-fluid">
      <h2 className="title--color my-2">
        ¡Hola,
        {' '}
        <span>Juan!</span>
      </h2>
      <p className="pb-4 mb-2">Completa los datos de tu auto</p>
      <div className="mb-3">
        <Select
          id="year"
          label="Año"
          value={yearOfCar}
          onChange={(event) => eventHandler(setYearOfCar)(event.target.value)}
        >
          {yearsList(currentYear)}
        </Select>
      </div>
      <div className="mb-3">
        <Select
          id="document-type"
          label="Marca"
          value={modelOfCar}
          onChange={(event) => eventHandler(setmodelOfCar)(event.target.value)}
        >
          {carModelsList.map((model) => (<option key={model} value={model}>{model}</option>))}
        </Select>
      </div>
      <div>
        <p className="title-font title--color">¿Tu auto es a gas?</p>
        <div className="form-check form-check-inline mb-4">
          <input
            className="form-check-input"
            type="radio"
            name="gas-car"
            id="gas-car-yes"
          />
          <label className="form-check-label form-check-label--color" htmlFor="gas-car-yes">
            Sí
          </label>
        </div>
        <div className="form-check form-check-inline mb-4">
          <input
            className="form-check-input"
            type="radio"
            name="gas-car"
            id="gas-car-no"
          />
          <label className="form-check-label form-check-label--color" htmlFor="gas-car-no">
            No
          </label>
        </div>
      </div>
      <HelpCardToFindCarModel />
      <p className="title--font title--color">
        <label htmlFor="total-sum-insured">
          Indica la suma asegurada
          <br />
          <span className="price-range__label paragraph--color d-flex justify-content-between mt-1">
            <span>MIN $12.500</span>
            <span>MAX $16,500</span>
          </span>
        </label>
      </p>
      <div className="input-group pb-4 mb-2">
        <Button classes="border-end-0" type="button" color="outline-light" size="small">
          <span className="bi bi-dash-lg" />
        </Button>
        <InputField
          classes="title--font title--color border-end-0 border-start-0 text-center"
          ariaLabel="Suma total asegurada"
          type="text"
          id="total-sum-insured"
          value={`$ ${totalSumInsured}`}
          onChange={(event) => eventHandler(setTotalSumInsured)(event.target.value)}
          maxLength={8}
          pattern="[0-9]{8}"
          floating={false}
        />
        <Button classes="border-start-0" type="button" color="outline-light" size="small">
          <span className="bi bi-plus-lg" />
        </Button>
      </div>

      <div>
        <Button
          type="submit"
          color="primary"
          classes="w-100"
        >
          CONTINUAR
        </Button>
      </div>
    </form>
  );
};

export default CarDataForm;
