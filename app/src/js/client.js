import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyBKf_aP7SkbveoDIu-u2F7oiRl0D4j-3h0",
    authDomain: "firespike-89a8f.firebaseapp.com",
    databaseURL: "https://firespike-89a8f.firebaseio.com",
    storageBucket: "firespike-89a8f.appspot.com",
    messagingSenderId: "402179948871"
};

firebase.initializeApp(config);

import Layout from "./components/Layout";
import store from "./store";

const app = document.getElementById("app");

ReactDOM.render(<Provider store={store}>
    <Layout/>
</Provider>, app);