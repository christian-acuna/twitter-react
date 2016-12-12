/*jshint esversion: 6 */
export default function reducer(state={
    user: {
      id: null,
      username: null,
      handle: null,
      avatar_url: null,
      bio: null,
      tweets: [],
    },
    fetching: false,
    fetched: false,
    error: null,
    auth: {
      access_token: null
    },
  }, action) {

    switch (action.type) {
      case "FETCH_USER": {
        return {...state, fetching: true}
      }
      case "FETCH_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_USER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload,
        }
      }
      case "LOGIN_RESPONSE_FULFILLED": {
        return {
          ...state,
          auth: {...state.auth, access_token: action.payload.access_token},
        }
      }
      case "SET_USER_AGE": {
        return {
          ...state,
          user: {...state.user, age: action.payload},
        }
      }
    }

    return state
}
