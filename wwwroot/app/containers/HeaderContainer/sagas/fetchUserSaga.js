import { REQUEST_USER } from './../constants';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { requestUserSucceeded, requestUserFailed } from './../actions';
import { push } from 'react-router-redux';


import {ApiSettings} from '../../../_shared/config/environment';

// Individual exports for testing
function fetchUserFromServer() {
  return fetch(`${ApiSettings.searchPrefix}users/currentuser`)
    .then(res => res.json());
}

function* fetchUser() {
  try {
    const user = yield call(fetchUserFromServer);
    if (user) {
      yield put(requestUserSucceeded(user));
    } else {
      yield put(push('/signin'));
    }
  } catch (e) {
    yield put(push('/signin'));    
    yield put(requestUserFailed(e.message));
  }
}

// Individual exports for testing
export function* fetchUserSaga() {
  yield* takeLatest(REQUEST_USER, fetchUser);
}

export default fetchUserSaga;