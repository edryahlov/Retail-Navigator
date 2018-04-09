import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import './scss/main.scss';

ReactDOM.render(<App/>, document.getElementById('app'));
registerServiceWorker();