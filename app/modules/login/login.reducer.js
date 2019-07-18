import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['authToken'],
  loginFailure: ['error'],
  logoutRequest: null,
  logoutSuccess: null,
  loginLoad: [],
  loginLoadSuccess: [],
  requestToken: ['email'],
  successToken: ['JWTToken']
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  email: null,
  authToken: null,
  error: null,
  fetching: false,
  loading: false,
  JWTToken: null
})

/* ------------- Reducers ------------- */

// we're attempting to login
export const request = (state) => state.merge({ fetching: true })

// we've successfully logged in
export const success = (state, data) => {
  const { authToken } = data
  return state.merge({ fetching: false, error: null, authToken })
}

// we've had a problem logging in
export const failure = (state, { error }) => state.merge({ fetching: false, error, authToken: null })

// we're attempting to load token from startup sagas
export const load = (state) => state.merge({ loading: true })

export const loadSuccess = (state) => state.merge({ loading: false })
// we need to logout, meaning clear access tokens and account
export const logoutRequest = state => INITIAL_STATE

// we've logged out
export const logoutSuccess = state => INITIAL_STATE

//네이버 로그인 후 백엔드 서버로부터 토큰을 가져온다.
export const setJwtToken = (state, data) => {
  const { JWTToken } = data
  console.warn(JWTToken);
  return state.merge({ fetching: false, error: null, JWTToken })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGIN_LOAD]: load,
  [Types.LOGIN_LOAD_SUCCESS]: loadSuccess,
  [Types.LOGOUT_REQUEST]: logoutRequest,
  [Types.LOGOUT_SUCCESS]: logoutSuccess,
  [Types.SUCCESS_TOKEN]: setJwtToken,
  [Types.REQUEST_TOKEN]: request
})

/* ------------- Selectors ------------- */
