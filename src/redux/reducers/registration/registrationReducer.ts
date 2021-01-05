import * as actionTypes from '../../actions/actionTypes';
import { RegisterActions } from '../../actions/registration/registrationActions';

const initialState: any = {
  registration: {},
  loading: false,
  error: null,
};

const registrationReducer = (state = initialState, action: RegisterActions) => {
  switch (action.type) {
    case actionTypes.REGISTER_LOADING:
      return {
        ...state,
        loading: action.loading,
      };

    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        registration: action.payload,
      };

    case actionTypes.REGISTER_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default registrationReducer;
