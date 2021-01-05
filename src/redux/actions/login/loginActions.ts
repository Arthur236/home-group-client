import axios from 'axios';
import { Dispatch } from 'redux';

import * as actionTypes from '../actionTypes';
import { API_URL } from '../../../constants';
import handleError from '../../../utils/handleError';

interface LoginInput {
  email: string;
  password: string;
}

interface LoginResponse {
  msg: string;
  userId: string;
  data: {
    token: string;
  };
}

interface LoginLoadingActionInterface {
  readonly type: typeof actionTypes.LOGIN_LOADING;
  loading: boolean;
}

interface LoginSuccessActionInterface {
  readonly type: typeof actionTypes.LOGIN_SUCCESS;
  payload: LoginResponse;
}

interface LoginErrorActionInterface {
  readonly type: typeof actionTypes.LOGIN_ERROR;
  error: any;
}

interface LogoutActionInterface {
  readonly type: typeof actionTypes.LOGOUT;
}

export type LoginActions =
  | LoginLoadingActionInterface
  | LoginErrorActionInterface
  | LoginSuccessActionInterface
  | LogoutActionInterface;

const loginLoading = (loading: boolean): LoginLoadingActionInterface => ({
  type: actionTypes.LOGIN_LOADING,
  loading,
});

export const loginSuccess = (
  payload: LoginResponse,
): LoginSuccessActionInterface => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload,
});

const loginError = (error: any): LoginErrorActionInterface => ({
  type: actionTypes.LOGIN_ERROR,
  error,
});

const logoutSuccess = (): LogoutActionInterface => ({
  type: actionTypes.LOGOUT,
});

export const login = (values: LoginInput, redirect: Function) => {
  return (dispatch: Dispatch<LoginActions>) => {
    dispatch(loginLoading(true));

    return axios
      .post(`${API_URL}/auth/login`, values)
      .then(async (res) => {
        const data = res.data?.data;
        const token = data?.token;
        axios.defaults.headers.common.Authorization = token;

        localStorage.setItem("token", JSON.stringify(token));

        dispatch(loginSuccess(res.data));
        dispatch(loginLoading(false));

        redirect('/');
      })
      .catch((error) => {
        dispatch(loginError(error));
        dispatch(loginLoading(false));

        handleError(error);
      });
  };
};

export const logout = () => {
  return (dispatch: Dispatch<LoginActions>) => {
    dispatch(logoutSuccess());
  };
};
