import {AuthTypes} from '../types';

const initialState = {
  loading: false,
  error: null,
  phone: '',
  password: '',
  token: '',
  showLanding: false,
  validCredentials: false,
  message: ' '
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_SUCCESS:
      return {
        name: action.data.adminInfo.name,
        phone: action.data.adminInfo.phone,
        token: action.data.token,
        showLanding: !state.showLanding,
        validCredentials: true
      }
    case AuthTypes.LOGIN_ERROR:
      return {
        message: action.data.error,
        validCredentials:false
      }
    case AuthTypes.LOGOUT_REQUEST:
      return {
        ...state,
        phone: '',
        password: '',
        token: '',
        showLanding: false
      };
    default:
      return state;
  }
};

export default AuthReducer;
