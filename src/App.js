import React from 'react';
import Todo from './containers/Todo';

import './App.css';

function App() {

  console.log('<<<<<<<  App render  >>>>>>>');
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
