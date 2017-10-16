//import { take, call, put, select } from 'redux-saga/effects';
import { LOGIN_REQUEST, REQUEST_APP_INFO, REQUEST_USER_IMAGE } from './../constants';
import { takeLatest, takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { loginSuccess, loginFailure, requestAppInfoSucceeded, requestAppInfoFailed, userImageSuccess } from './../actions';

import {ApiSettings} from '../../../_shared/config/environment';

// Individual exports for testing
function fetchAppInfoFromServer() {
  return fetch(ApiSettings.searchPrefix + 'applications/' + ApiSettings.suffix)
    .then(res => res.json());
}

function* fetchAppInfo() {
  try {
    const appInfo = yield call(fetchAppInfoFromServer);
    yield put(requestAppInfoSucceeded(appInfo));
  } catch (e) {
    yield put(requestAppInfoFailed(e.message));
  }
}

// Individual exports for testing
export function* fetchAppInfoSaga() {
  yield* takeLatest(REQUEST_APP_INFO, fetchAppInfo);
}


function loginInfoToServer(hash){
    return fetch(ApiSettings.searchPrefix + 'auth/login/' + ApiSettings.suffix, {
        method: 'POST',
        headers:{
            'Authorization': `Basic ${hash}`
        }
        }).then(response => response.json());
}

function* loginUser(userInfo){
    try {
        const hash = new Buffer(`${userInfo.payload.username}:${userInfo.payload.password}`).toString('base64');
        const tokenInfo = yield call(loginInfoToServer, hash);
        yield put(loginSuccess(tokenInfo, {rememberMe: userInfo.payload.rememberMe, userEmail: userInfo.payload.username}));
      } catch (e) {
        yield put(loginFailure(e.message));
      }
}

export function* loginSaga() {
    yield* takeEvery(LOGIN_REQUEST, loginUser);
}

function fetchUserImageFromServer(info){
  console.log(info.userEmail);
  return fetch(ApiSettings.searchPrefix + 'users/profile?email=' + info.userEmail)
  .then(res => res.json());
}

function* userImage(info) {
  try {
    const imageURL = yield call(fetchUserImageFromServer, info);
    yield put(userImageSuccess(imageURL));
  } catch (e) {
    console.log(e.message);
  }
}

export function* fetchUserImageURLSaga() {
  yield* takeLatest(REQUEST_USER_IMAGE, userImage);
}