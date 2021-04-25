import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'fontsource-roboto';
import App from './components/App';
import Providers from './providers';

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
      </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
