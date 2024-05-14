import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppContextProvider } from './store/app-context/app-context';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppContextProvider>
);
