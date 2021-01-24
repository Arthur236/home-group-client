import * as actionTypes from '../../actions/actionTypes';
import { ResetPasswordActions } from '../../actions/resetPassword/resetPasswordActions';

const initialState: any = {
  resetPassword: {},
  loading: false,
  error: '',
};

const resetPasswordReducer = (state = initialState, action: ResetPasswordActions) => {
  switch (action.type) {
    case actionTypes.RESET_PASSWORD_LOADING:
      return {
        ...state,
        loading: action.loading,
      };

    case actionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPassword: action.payload,
        loading: false
      };

    case actionTypes.RESET_PASSWORD_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    default:
      return state;
  }
};

export default resetPasswordReducer;
