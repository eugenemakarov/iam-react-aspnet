/*
 *
 * LoginContainer actions
 *
 */

import {
  REQUEST_APP_INFO,
  REQUEST_APP_INFO_SUCCEEDED,
  REQUEST_APP_INFO_FAILED,

  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCEEDED,
  LOGIN_REQUEST_FAILED,

  REQUEST_USER_IMAGE,
  REQUEST_USER_IMAGE_SUCCEEDED
} from './constants';

export function requestAppInfo() {
  return {
    type: REQUEST_APP_INFO,
  };
}

export function requestAppInfoSucceeded(appInfo) {
  return {
    type: REQUEST_APP_INFO_SUCCEEDED,
    appInfo,
  };
}

export function requestAppInfoFailed(message) {
  return {
    type: REQUEST_APP_INFO_FAILED,
    message,
  };
}

export function loginRequest(payload) {
  return {
    type: LOGIN_REQUEST,
    payload
  };
}

export function loginSuccess(tokenInfo, userInfo) {
  return {
    type: LOGIN_REQUEST_SUCCEEDED,
    tokenInfo,
    userInfo
  };
}

export function loginFailure(message) {
  return {
    type: LOGIN_REQUEST_FAILED,
    message
  };
}

export function requestUserImage(userEmail){
  return {
    type: REQUEST_USER_IMAGE,
    userEmail
  };
}

export function userImageSuccess(imageUrl){
  return {
    type: REQUEST_USER_IMAGE_SUCCEEDED,
    imageUrl
  };
}
