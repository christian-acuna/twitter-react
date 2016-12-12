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

export function sendLogin() {
  return {
    type: "LOGIN_REQUEST"
  };
}
