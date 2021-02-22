import * as actionTypes from '../../actions/actionTypes';
import { FetchProfileActions } from '../../actions/profile/fetchProfileActions';

const initialState: any = {
  profile: {},
  loading: false,
  error: '',
};

const fetchProfileReducer = (state = initialState, action: FetchProfileActions) => {
  switch (action.type) {
    case actionTypes.FETCH_PROFILE_LOADING:
      return {
        ...state,
        loading: action.loading,
      };

    case actionTypes.FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };

    case actionTypes.FETCH_PROFILE_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    default:
      return state;
  }
};

export default fetchProfileReducer;
