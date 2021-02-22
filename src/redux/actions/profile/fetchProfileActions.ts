import axios from 'axios';
import { Dispatch } from 'redux';

import * as actionTypes from '../actionTypes';
import { API_URL } from '../../../constants';
import handleError from '../../../utils/handleError';

interface FetchProfileResponse {
  user: any;
}

interface FetchProfileLoadingActionInterface {
  readonly type: typeof actionTypes.FETCH_PROFILE_LOADING;
  loading: boolean;
}

interface FetchProfileSuccessActionInterface {
  readonly type: typeof actionTypes.FETCH_PROFILE_SUCCESS;
  payload: FetchProfileResponse;
}

interface FetchProfileErrorActionInterface {
  readonly type: typeof actionTypes.FETCH_PROFILE_ERROR;
  error: any;
}

export type FetchProfileActions =
  | FetchProfileLoadingActionInterface
  | FetchProfileErrorActionInterface
  | FetchProfileSuccessActionInterface;

const fetchProfileLoading = (loading: boolean): FetchProfileLoadingActionInterface => ({
  type: actionTypes.FETCH_PROFILE_LOADING,
  loading,
});

export const fetchProfileSuccess = (
  payload: FetchProfileResponse,
): FetchProfileSuccessActionInterface => ({
  type: actionTypes.FETCH_PROFILE_SUCCESS,
  payload,
});

const fetchProfileError = (error: any): FetchProfileErrorActionInterface => ({
  type: actionTypes.FETCH_PROFILE_ERROR,
  error,
});

export const fetchProfile = (id: string) => {
  return (dispatch: Dispatch<FetchProfileActions>) => {
    dispatch(fetchProfileLoading(true));

    return axios
      .get(`${API_URL}/users/${id}`)
      .then(async (res) => {
        const data = res.data;

        dispatch(fetchProfileSuccess(data));
        dispatch(fetchProfileLoading(false));
      })
      .catch((error) => {
        const err = handleError(error);

        dispatch(fetchProfileError(err));
        dispatch(fetchProfileLoading(false));
      });
  };
};
