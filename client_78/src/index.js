import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App_78 from './App_78';
import {AppProvider_78} from './context/appContext_78'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider_78>
    <App_78 />
    </AppProvider_78>
  </React.StrictMode>,
  document.getElementById('root')
);


