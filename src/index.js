import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "semantic-ui-css/semantic.min.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";

export const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
      <App/>
  </ReduxProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
