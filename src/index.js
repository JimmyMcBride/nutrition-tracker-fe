import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// normalize.css
import "normalize.css";

// Set up Redux and Router
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// Set up redux middleware and root reducer
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

import App from "./App";

// Save this puppy for later!
import * as serviceWorker from "./serviceWorker";

//------ Firebase Auth Init -----//
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzzEOtkO5T63y0skOtP_oO2D7ukxjNs-I",
  authDomain: "getnutrijournal.firebaseapp.com",
  databaseURL: "https://getnutrijournal.firebaseio.com",
  projectId: "getnutrijournal",
  storageBucket: "getnutrijournal.appspot.com",
  messagingSenderId: "869823725802",
  appId: "1:869823725802:web:86e08c0ec10aac24805793"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//----- End Firebase Auth Init ----///

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
