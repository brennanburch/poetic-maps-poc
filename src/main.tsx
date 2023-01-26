import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App';

import './styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
