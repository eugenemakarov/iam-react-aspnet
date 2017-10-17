import { call, put, fork } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { REQUEST_USER } from '../constants';
import { resetUser, requestUserSucceeded, requestUserFailed } from '../actions';
import { requestListSucceeded, requestListFailed } from '../../../../_shared/actions';
import { push } from 'react-router-redux';
import { ApiSettings } from '../../../../_shared/config/environment';
import toastr from 'toastr';

function fetchDetailsFromServer(id) {
  return fetch(`${ApiSettings.searchPrefix}admin/users/${id}`)
    .then(response => response.json());
}

function fetchListFromServer(name) {
  return fetch(`${ApiSettings.searchPrefix}lists/${name}`)
    .then(response => response.json());
}

function* fetchDetails(id) {
  try {
    const details = yield call(fetchDetailsFromServer, id);
    yield put(requestUserSucceeded(details));
  } catch (e) {
    yield put(push('/404'));    
    yield put(requestUserFailed(e));
  }
}

function* fetchList(name) {
  try {
    const list = yield call(fetchListFromServer, name);
    yield put (requestListSucceeded(name, list));
  } catch (e) {
    console.log(e);
  }
}

function* fetchAll(action){
  const { id } = action;
  if (id && id !== 'new' ){
    yield fork(fetchDetails, id)
  } else {
    yield put (resetUser());
  }
  yield fork(fetchList, 'applications');
}

export function* fetchDetailsSaga() {
  yield* takeLatest(REQUEST_USER, fetchAll);
}

// All sagas to be loaded
export default fetchDetailsSaga;