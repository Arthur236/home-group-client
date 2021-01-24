import * as actionTypes from '../../actions/actionTypes';
import { ForgotPasswordActions } from '../../actions/forgotPassword/forgotPasswordActions';

const initialState: any = {
  forgotPassword: {},
  loading: false,
  error: '',
};

const forgotPasswordReducer = (state = initialState, action: ForgotPasswordActions) => {
  switch (action.type) {
    case actionTypes.FORGOT_PASSWORD_LOADING:
      return {
        ...state,
        loading: action.loading,
      };

    case actionTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPassword: action.payload,
        loading: false
      };

    case actionTypes.FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    default:
      return state;
  }
};

export default forgotPasswordReducer;
