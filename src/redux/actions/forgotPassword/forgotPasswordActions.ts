import axios from 'axios';
import { Dispatch } from 'redux';

import * as actionTypes from '../actionTypes';
import { API_URL } from '../../../constants';
import handleError from '../../../utils/handleError';

interface ForgotPasswordInput {
  email: string;
}

interface ForgotPasswordResponse {
  success: string;
}

interface ForgotPasswordLoadingActionInterface {
  readonly type: typeof actionTypes.FORGOT_PASSWORD_LOADING;
  loading: boolean;
}

interface ForgotPasswordSuccessActionInterface {
  readonly type: typeof actionTypes.FORGOT_PASSWORD_SUCCESS;
  payload: ForgotPasswordResponse;
}

interface ForgotPasswordErrorActionInterface {
  readonly type: typeof actionTypes.FORGOT_PASSWORD_ERROR;
  error: any;
}

export type ForgotPasswordActions =
  | ForgotPasswordLoadingActionInterface
  | ForgotPasswordErrorActionInterface
  | ForgotPasswordSuccessActionInterface;

const forgotPasswordLoading = (loading: boolean): ForgotPasswordLoadingActionInterface => ({
  type: actionTypes.FORGOT_PASSWORD_LOADING,
  loading,
});

export const forgotPasswordSuccess = (
  payload: ForgotPasswordResponse,
): ForgotPasswordSuccessActionInterface => ({
  type: actionTypes.FORGOT_PASSWORD_SUCCESS,
  payload,
});

const forgotPasswordError = (error: any): ForgotPasswordErrorActionInterface => ({
  type: actionTypes.FORGOT_PASSWORD_ERROR,
  error,
});

export const forgotPassword = (values: ForgotPasswordInput, onSuccess: Function) => {
  return (dispatch: Dispatch<ForgotPasswordActions>) => {
    dispatch(forgotPasswordLoading(true));

    return axios
      .put(`${API_URL}/auth/forgot-password`, values)
      .then(async (res) => {
        const data = res.data;

        dispatch(forgotPasswordSuccess(data));
        dispatch(forgotPasswordLoading(false));

        onSuccess();
      })
      .catch((error) => {
        const err = handleError(error);

        dispatch(forgotPasswordError(err));
        dispatch(forgotPasswordLoading(false));
      });
  };
};
