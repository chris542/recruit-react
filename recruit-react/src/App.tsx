import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import RegisterForm from './components/RegisterForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <h1 className="title">Welcome</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default App;
