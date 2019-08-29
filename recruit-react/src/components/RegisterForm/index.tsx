import React, { useState } from 'react';

import './registerform.css';

const RegisterForm: React.FC = props => {
  const [creditValue, setCreditValue] = useState<string>('');
  const [cvcValue, setCvcValue] = useState<string>('');
  const [expiryValue, setExpiryValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <input
        name="credit_card_number"
        type="number"
        placeholder="Credit card number"
        value={creditValue}
      />
      <input name="CVC" type="number" placeholder="CVC" value={cvcValue} />
      <input name="expiry" type="date" placeholder="expiry" value={expiryValue} />
      <input type="submit" />
    </form>
  );
};
export default RegisterForm;
