import * as actionTypes from '../../actions/actionTypes';
import { RegisterActions } from '../../actions/registration/registrationActions';

const initialState: any = {
  registration: {},
  loading: false,
  error: '',
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
        loading: false
      };

    case actionTypes.REGISTER_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    default:
      return state;
  }
};

export default registrationReducer;
