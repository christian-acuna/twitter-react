/*jshint esversion: 6 */
import axios from "axios";

export function showLoginModal() {
  return {
    type: "SHOW_LOGIN_MODAL"
  };
}

export function hideLoginModal() {
  return {
    type: "HIDE_LOGIN_MODAL"
  };
}

export function updateEmailLogin(email) {
  return {
    type: "UPDATE_EMAIL_LOGIN",
    payload: email
  };
}

export function updatePasswordLogin(password) {
  return {
    type: "UPDATE_PASSWORD_LOGIN",
    payload: password
  };
}

// export function sendLogin() {
//   return {
//     type: "LOGIN_REQUEST"
//   };
// }

export function sendLogin(email, password) {
  return function(dispatch) {
    axios.post("http://localhost:3000/v1/login", {
      email: email,
      password: password
    })
      .then((response) => {
        console.log(response);
        dispatch({type: "LOGIN_RESPONSE_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "LOGIN_RESPONSE_REJECTED", payload: err});
      });
  };
}
