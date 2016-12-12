/*jshint esversion: 6 */
import axios from "axios";

export function fetchUser(userId) {
  return function(dispatch) {
    axios.get(`http://localhost:3000/v1/users/${userId}`)
      .then((response) => {
        console.log(response);
        dispatch({type: "FETCH_USER_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_REJECTED", payload: err});
      });
  };
}
