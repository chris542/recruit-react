import React, { useState } from 'react';

import './registerform.css';

const RegisterForm: React.FC = props => {
  const [creditValue, setCreditValue] = useState<string>('');
  const [cvcValue, setCvcValue] = useState<string>('');
  const [expiryValue, setExpiryValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'credit_card_number':
        setCreditValue(value);
        return;
      case 'CVC':
        setCvcValue(value);
        return;
      case 'expiry':
        setExpiryValue(value);
        return;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
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
      <input type="submit" />
    </form>
  );
};
export default RegisterForm;
