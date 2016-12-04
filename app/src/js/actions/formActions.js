import axios from "axios";
import * as firebase from "firebase";
// var primus = new Primus('http://localhost:4002/');

export function fetchTweets() {
    return function(dispatch) {
        axios.get("http://rest.learncode.academy/api/test123/tweets")
            .then((response) => {
                dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
            })
    }
}

export function sendFormData(data) {
    const rootRef = firebase.database().ref().child('data');
    console.log('@@@ obj data', typeof JSON.parse(data));
    rootRef.set({
        ["form_data"]: JSON.parse(data)
    });

    return function(dispatch) {
        // primus.send("form_data",{ message: "from client side" });
        // axios.get("http://rest.learncode.academy/api/test123/tweets")
        //     .then((response) => {
        //         dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
        //     })
        //     .catch((err) => {
        //         dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
        //     })
    }
}
