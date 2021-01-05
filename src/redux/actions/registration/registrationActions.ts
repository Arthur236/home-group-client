import axios from 'axios';
import { Dispatch } from 'redux';

import * as actionTypes from '../actionTypes';
import { API_URL } from '../../../constants';
import handleError from '../../../utils/handleError';

interface RegistrationDetailsInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  password2: string;
}

interface RegisterLoadingActionInterface {
  readonly type: typeof actionTypes.REGISTER_LOADING;
  loading: boolean;
}

export interface RegisterSuccessActionInterface {
  readonly type: typeof actionTypes.REGISTER_SUCCESS;
  payload: RegistrationDetailsInterface;
}

interface RegisterErrorActionInterface {
  readonly type: typeof actionTypes.REGISTER_ERROR;
  error: any;
}

export type RegisterActions =
  | RegisterLoadingActionInterface
  | RegisterErrorActionInterface
  | RegisterSuccessActionInterface;

const registerLoading = (loading: boolean): RegisterLoadingActionInterface => ({
  type: actionTypes.REGISTER_LOADING,
  loading,
});

const registerSuccess = (payload: any): RegisterSuccessActionInterface => ({
  type: actionTypes.REGISTER_SUCCESS,
  payload,
});

const registerError = (error: any): RegisterErrorActionInterface => ({
  type: actionTypes.REGISTER_ERROR,
  error,
});

export const register = (values: any, redirect: Function) => {
  return (dispatch: Dispatch<RegisterActions>) => {
    dispatch(registerLoading(true));

    return axios({
      method: 'post',
      url: `${API_URL}/auth/register`,
      data: values,
    })
      .then((res) => {
        dispatch(registerSuccess(res.data));
        dispatch(registerLoading(false));

        redirect('/login');
      })
      .catch((error) => {
        dispatch(registerError(error));
        dispatch(registerLoading(false));

        handleError(error);
      });
  };
};
