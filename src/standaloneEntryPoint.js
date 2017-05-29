import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

export function main() {
  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
}

export default main;
