import React, { useState } from 'react';
import Greeter from './components/greeter';
import GreeterInput from './components/greeterinput';
import './App.css';

function App() {

  const [name, setName] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <GreeterInput onChange={(e) => setName(e.target.value)} name={name} />
        <Greeter name={name} />
      </header>
    </div>
  );
}

export default App;
