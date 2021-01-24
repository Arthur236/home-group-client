import axios from 'axios';
import { Dispatch } from 'redux';

import * as actionTypes from '../actionTypes';
import { API_URL } from '../../../constants';
import handleError from '../../../utils/handleError';

interface ResetPasswordInput {
  newPassword: string;
  token: string;
}

interface ResetPasswordResponse {
  message: string;
}

interface ResetPasswordLoadingActionInterface {
  readonly type: typeof actionTypes.RESET_PASSWORD_LOADING;
  loading: boolean;
}

interface ResetPasswordSuccessActionInterface {
  readonly type: typeof actionTypes.RESET_PASSWORD_SUCCESS;
  payload: ResetPasswordResponse;
}

interface ResetPasswordErrorActionInterface {
  readonly type: typeof actionTypes.RESET_PASSWORD_ERROR;
  error: any;
}

export type ResetPasswordActions =
  | ResetPasswordLoadingActionInterface
  | ResetPasswordErrorActionInterface
  | ResetPasswordSuccessActionInterface;

const resetPasswordLoading = (loading: boolean): ResetPasswordLoadingActionInterface => ({
  type: actionTypes.RESET_PASSWORD_LOADING,
  loading,
});

export const resetPasswordSuccess = (
  payload: ResetPasswordResponse,
): ResetPasswordSuccessActionInterface => ({
  type: actionTypes.RESET_PASSWORD_SUCCESS,
  payload,
});

const resetPasswordError = (error: any): ResetPasswordErrorActionInterface => ({
  type: actionTypes.RESET_PASSWORD_ERROR,
  error,
});

export const resetPassword = (values: ResetPasswordInput, redirect: Function) => {
  return (dispatch: Dispatch<ResetPasswordActions>) => {
    dispatch(resetPasswordLoading(true));

    return axios
      .put(`${API_URL}/auth/reset-password`, values)
      .then(async (res) => {
        const data = res.data;

        dispatch(resetPasswordSuccess(data));
        dispatch(resetPasswordLoading(false));

        redirect('/reset-successful');
      })
      .catch((error) => {
        const err = handleError(error);

        dispatch(resetPasswordError(err));
        dispatch(resetPasswordLoading(false));
      });
  };
};
