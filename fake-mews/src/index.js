import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var endgame = {min:-40, max:40};

ReactDOM.render(
  <App endgame={endgame} />,
  document.getElementById('root')
);
