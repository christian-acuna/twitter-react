/*jshint esversion: 6 */
import axios from "axios";

export function fetchTweets() {
  return function(dispatch) {
    axios.get("http://localhost:3000/v1/tweets/recent")
      .then((response) => {
        console.log(response);
        dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_TWEETS_REJECTED", payload: err});
      });
  };
}
