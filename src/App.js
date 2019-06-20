import React from 'react';
import './App.css';
import Graph from './components/Graph'

function App(props) {
  return (  
    <div className="App">
      <Graph data={props.data} />
    </div>
  );
}

export default App;
