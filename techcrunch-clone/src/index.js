<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './Store'
=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

>>>>>>> main
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
<<<<<<< HEAD
  document.getElementById('root')
);
=======

  document.getElementById("root")
);
>>>>>>> main
