import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './PasswordChecker.css'
import PasswordChecker from './PasswordChecker';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Password Strength</h1>
      </header>
      <main>
        <PasswordChecker></PasswordChecker>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
