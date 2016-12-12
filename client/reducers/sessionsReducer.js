/*jshint esversion: 6 */
export default function reducer(state={
  loginVisible: false
}, action) {

  switch (action.type) {
    case 'SHOW_LOGIN_MODAL': {
      return {...state, loginVisible: true};
    }

    case 'HIDE_LOGIN_MODAL': {
      return {...state, loginVisible: false};
    }
    
    default:
      return state;
  }
}
