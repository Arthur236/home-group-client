import axios from 'axios';
import { Dispatch } from 'redux';

import * as actionTypes from '../actionTypes';
import { API_URL } from '../../../constants';
import handleError from '../../../utils/handleError';

interface UpdatePhotoResponse {
  user: any;
}

interface UpdatePhotoLoadingActionInterface {
  readonly type: typeof actionTypes.UPDATE_PHOTO_LOADING;
  loading: boolean;
}

interface UpdatePhotoSuccessActionInterface {
  readonly type: typeof actionTypes.UPDATE_PHOTO_SUCCESS;
  payload: UpdatePhotoResponse;
}

interface UpdatePhotoErrorActionInterface {
  readonly type: typeof actionTypes.UPDATE_PHOTO_ERROR;
  error: any;
}

export type UpdatePhotoActions =
  | UpdatePhotoLoadingActionInterface
  | UpdatePhotoErrorActionInterface
  | UpdatePhotoSuccessActionInterface;

const updatePhotoLoading = (loading: boolean): UpdatePhotoLoadingActionInterface => ({
  type: actionTypes.UPDATE_PHOTO_LOADING,
  loading,
});

export const updatePhotoSuccess = (
  payload: UpdatePhotoResponse,
): UpdatePhotoSuccessActionInterface => ({
  type: actionTypes.UPDATE_PHOTO_SUCCESS,
  payload,
});

const updatePhotoError = (error: any): UpdatePhotoErrorActionInterface => ({
  type: actionTypes.UPDATE_PHOTO_ERROR,
  error,
});

export const updatePhoto = (id: string, file: any) => {
  return (dispatch: Dispatch<UpdatePhotoActions>) => {
    dispatch(updatePhotoLoading(true));

    const data = new FormData();
    data.append('file', file, file.fileName);

    return axios
      .put(`${API_URL}/users/photo/${id}`, file, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': 'multipart/form-data',
        }
      })
      .then(async (res) => {
        const data = res.data;

        dispatch(updatePhotoSuccess(data));
        dispatch(updatePhotoLoading(false));
      })
      .catch((error) => {
        const err = handleError(error);

        dispatch(updatePhotoError(err));
        dispatch(updatePhotoLoading(false));
      });
  };
};
