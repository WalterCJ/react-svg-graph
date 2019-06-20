import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './scripts/data'

ReactDOM.render(<App datasets={data} />, document.getElementById('root'));

