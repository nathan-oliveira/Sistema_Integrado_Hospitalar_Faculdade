import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './Main';
import store from './Store'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();