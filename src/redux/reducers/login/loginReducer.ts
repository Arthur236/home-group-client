import * as actionTypes from '../../actions/actionTypes';
import { LoginActions } from '../../actions/login/loginActions';

const initialState: any = {
  login: {},
  isAuthenticated: false,
  loading: false,
  error: null,
};

const loginReducer = (state = initialState, action: LoginActions) => {
  switch (action.type) {
    case actionTypes.LOGIN_LOADING:
      return {
        ...state,
        loading: action.loading,
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        login: action.payload,
        isAuthenticated: true,
      };

    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default loginReducer;
