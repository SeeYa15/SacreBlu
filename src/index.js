import React from 'react';
import ReactDOM from 'react-dom';
import './style/Mainframe.css';
import App from './App';
import MyApp from './MyApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
      <App />, document.getElementById('root'))
registerServiceWorker();
