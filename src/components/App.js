import React from 'react';
import ButtonsContainer from '../containers/ButtonsContainer'
import CounterContainer from '../containers/CounterContainer'
import './App.css';
 
function App() {
  return (
    <div className="container">
      <h1 className="header">React Redux Example</h1>
      <ButtonsContainer />
      <CounterContainer />
    </div>
    
  );
}

export default App;
