import React, { useState } from 'react';

import './registerform.css';

interface IFormError {
  credit: string;
  cvc: string;
  expiry: string;
}

const RegisterForm: React.FC = props => {
  const [creditValue, setCreditValue] = useState<string>('');
  const [cvcValue, setCvcValue] = useState<string>('');
  const [expiryValue, setExpiryValue] = useState<string>('');

  const [creditValid, setCreditValid] = useState<boolean>(false);
  const [cvcValid, setCvcValid] = useState<boolean>(false);
  const [expiryValid, setExpiryValid] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<IFormError>({ credit: '', cvc: '', expiry: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'credit_card_number':
        value.length >= 1 ? setCreditValid(true) : setCreditValid(false);
        setCreditValue(value);
        return;
      case 'CVC':
        value.length >= 1 ? setCvcValid(true) : setCvcValid(false);
        setCvcValue(value);
        return;
      case 'expiry':
        value.length >= 1 ? setExpiryValid(true) : setExpiryValid(false);
        setExpiryValue(value);
        return;
      default:
        break;
    }
  };

  const validateForm = () => {
    const errorMessage: IFormError = {
      credit: !creditValid ? 'Please provide valid credit card number.' : '',
      cvc: !cvcValid ? 'Please provide valid CVC number.' : '',
      expiry: !expiryValid ? 'Please provide your credit card expiry date.' : '',
    };
    setFormErrors(errorMessage);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateForm();
    if (creditValid && cvcValid && expiryValid) {
      console.log({ creditValue, cvcValue, expiryValue });
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      {(formErrors.credit !== '' || formErrors.cvc !== '' || formErrors.cvc !== '') && (
        <ul className="errorMessage">
          {!creditValid && <li>{formErrors.credit}</li>}
          {!cvcValid && <li>{formErrors.cvc}</li>}
          {!expiryValid && <li>{formErrors.expiry}</li>}
        </ul>
      )}
      <input
        onChange={handleInputChange}
        name="credit_card_number"
        type="number"
        placeholder="Credit card number"
        value={creditValue}
      />
      <input
        onChange={handleInputChange}
        name="CVC"
        type="number"
        placeholder="CVC"
        value={cvcValue}
      />
      <input
        onChange={handleInputChange}
        name="expiry"
        type="date"
        placeholder="expiry"
        value={expiryValue}
      />
      <input type="submit" disabled={!creditValid || !cvcValid || !expiryValid} />
    </form>
  );
};
export default RegisterForm;
