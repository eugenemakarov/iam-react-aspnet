/*
 *
 * ProfileContainer actions
 *
 */

import {
  REQUEST_PROFILE,
  REQUEST_PROFILE_SUCCEEDED,
  REQUEST_PROFILE_FAILED,

  REQUEST_UPLOAD_PICTURE,
  REQUEST_UPLOAD_PICTURE_SUCCEEDED,
  REQUEST_UPLOAD_PICTURE_FAILED,

  REQUEST_SAVE_PROFILE,
  REQUEST_SAVE_PROFILE_SUCCEEDED,
  REQUEST_SAVE_PROFILE_FAILED,
} from './constants';

export function requestProfile(id) {
  return {
    type: REQUEST_PROFILE,
    id
  };
}

export function requestProfileSucceeded(details) {
  return {
    type: REQUEST_PROFILE_SUCCEEDED,
    details,
  };
}

export function requestProfileFailed(message) {
  return {
    type: REQUEST_PROFILE_FAILED,
    message,
  };
}

export function requestUploadPicture(id, data) {
  return {
    type: REQUEST_UPLOAD_PICTURE,
    id,
    data
  };
}

export function requestUploadPictureSucceeded(image) {
  return {
    type: REQUEST_UPLOAD_PICTURE_SUCCEEDED,
    image,
  };
}

export function requestUploadPictureFailed(message) {
  return {
    type: REQUEST_UPLOAD_PICTURE_FAILED,
    message,
  };
}

export function requestSaveProfile(data) {
  return {
    type: REQUEST_SAVE_PROFILE,
    data,
  };
}

export function requestSaveProfileSucceeded(message) {
  return {
    type: REQUEST_SAVE_PROFILE_SUCCEEDED,
    message,
  };
}

export function requestSaveProfileFailed(message) {
  return {
    type: REQUEST_SAVE_PROFILE_FAILED,
    message,
  };
}