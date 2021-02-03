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
import { store } from "./Redux/store";
import { Provider } from "react-redux";
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
<<<<<<< HEAD
>>>>>>> main
=======

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
>>>>>>> 534c8015d94617a4667ccc9a5da69825b9959755
