import React, {useState} from 'react';
import './App.css';
import Graph from './components/Graph'

function App(props) {
  const [dataSetIndex, setDataSetIndex] = useState(0);

  let options = props.datasets.map((_, index) => {
    return <option key={index} value={index}>Dataset {index + 1}</option>
  });

  return (
    <div>
      <select
        value={dataSetIndex}
        onChange={event => setDataSetIndex(event.target.value)} >
        {options}
      </select>
      <Graph data={props.datasets[dataSetIndex]} />
    </div>
  );
}

export default App;
