import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import RegisterForm from './components/RegisterForm';

interface User {
  firstName: string;
}

const App: React.FC = () => {
  const User: User = {
    firstName: 'Chris',
  };
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <h1 className="title">Welcome {User.firstName}</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default App;
