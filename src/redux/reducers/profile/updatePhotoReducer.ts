import * as actionTypes from '../../actions/actionTypes';
import { UpdatePhotoActions } from '../../actions/profile/updatePhotoActions';

const initialState: any = {
  photo: {},
  loading: false,
  error: '',
};

const updatePhotoReducer = (state = initialState, action: UpdatePhotoActions) => {
  switch (action.type) {
    case actionTypes.UPDATE_PHOTO_LOADING:
      return {
        ...state,
        loading: action.loading,
      };

    case actionTypes.UPDATE_PHOTO_SUCCESS:
      return {
        ...state,
        photo: action.payload,
        loading: false
      };

    case actionTypes.UPDATE_PHOTO_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    default:
      return state;
  }
};

export default updatePhotoReducer;
