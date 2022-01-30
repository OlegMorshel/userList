import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import App from "./App";
import usersListReducer from "./redux/reducers/userListReducer";

import './scss/reset.scss';
import './scss/index.css';
import "react-toastify/dist/ReactToastify.css";

const store = createStore(usersListReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
