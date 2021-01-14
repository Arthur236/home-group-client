import * as actionTypes from '../../actions/actionTypes';
import { LoginActions } from '../../actions/login/loginActions';

const initialState: any = {
  login: {},
  loading: false,
  error: '',
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
        loading: false
      };

    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    default:
      return state;
  }
};

export default loginReducer;
