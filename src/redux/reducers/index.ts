import { combineReducers } from 'redux';

import * as actionTypes from '../actions/actionTypes';

import login from './login/loginReducer';
import registration from './registration/registrationReducer';
import forgotPassword from './forgotPassword/forgotPasswordReducer';
import resetPassword from './resetPassword/resetPasswordReducer';
import profile from './profile/fetchProfileReducer';
import updatePhoto from './profile/updatePhotoReducer';

const appReducer = combineReducers({
  login,
  registration,
  forgotPassword,
  resetPassword,
  profile,
  updatePhoto,
});

const rootReducer = (state: any, action: any) => {
  // Clear all data in redux store to initial.
  if (action.type === actionTypes.LOGOUT) {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return appReducer(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
