import { createRoot } from 'react-dom/client'; // Importing es6 module
import React from 'react';
import App from './App'; // Import App component
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'; // Few Bootstrap Components need this
import 'font-awesome/css/font-awesome.css';
import "./style.css"; // Import CSS File

import ReduxExample from './ReduxExample';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import ProductReducer from './redux/reducers'; // importing reducer file

const store = createStore(ProductReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // Store setup

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ReduxExample />
  </Provider>
)
