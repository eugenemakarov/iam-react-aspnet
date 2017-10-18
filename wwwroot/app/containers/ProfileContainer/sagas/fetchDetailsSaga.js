import { call, put, fork } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { REQUEST_PROFILE } from '../constants';
import { requestProfileSucceeded, requestProfileFailed } from '../actions';
import { push } from 'react-router-redux';
import { ApiSettings } from '../../../_shared/config/environment';
import toastr from 'toastr';

function fetchDetailsFromServer(id) {
  return fetch(`${ApiSettings.searchPrefix}users/profile/${id}`)
    .then(response => response.json());
}

function* fetchDetails(action) {
  const { id } = action;
  try {
    const details = yield call(fetchDetailsFromServer, id);
    yield put(requestProfileSucceeded(details));
  } catch (e) {
    yield put(push('/404'));    
    yield put(requestProfileFailed(e));
  }
}

export function* fetchDetailsSaga() {
  yield* takeLatest(REQUEST_PROFILE, fetchDetails);
}

// All sagas to be loaded
export default fetchDetailsSaga;