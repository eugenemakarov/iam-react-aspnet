import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { REQUEST_APPLICATION } from '../constants';
import { requestApplicationSucceeded, requestApplicationFailed } from '../actions';
import { ApiSettings } from '../../../../_shared/config/environment';
import toastr from 'toastr';

function fetchDetailsFromServer(id) {
  return fetch(`${ApiSettings.searchPrefix}admin/applications/${id}`)
    .then(response => response.json())
}

function* fetchDetails(action) {
  const { id } = action;
  try {
    const details = yield call(fetchDetailsFromServer, id);
    yield put(requestApplicationSucceeded(details))
  } catch (e) {
    toastr.error('Something went wrong. Please try again later...', 'Error');
    yield put(requestApplicationFailed(e));
  }
}

export function* fetchDetailsSaga() {

  //I think if we add superstar to yield the next line of code won't be executed untill all yield are done in the function that we called after yield*
  yield* takeLatest(REQUEST_APPLICATION, fetchDetails);
  //executed after all yield in fetchDetails ?? maybe...
}

// All sagas to be loaded
export default fetchDetailsSaga;