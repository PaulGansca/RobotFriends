import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
