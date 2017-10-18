import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { REQUEST_SAVE_PROFILE } from '../constants';
import { requestProfile, requestSaveProfileSucceeded, requestSaveProfileFailed } from '../actions';
import { ApiSettings } from '../../../_shared/config/environment';
import toastr from 'toastr';
import { replace }  from 'react-router-redux';

function saveDetailsToServer(data) {
  debugger;
  return fetch(`${ApiSettings.searchPrefix}users/profile`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

function* saveDetails(action) {
  const { data } = action;

  let sMsg = 'The profile successfully updated.';
  let eMsg = 'Couldn\'t update the profile';
  

  try {
    const res = yield call(saveDetailsToServer, data);
    
    // yield put(requestSaveProfileSucceeded());
    // yield put(requestProfile(res.id));
    toastr.success(sMsg, 'Success');
    
  } catch (e) {
    yield put(requestSaveProfileFailed(e));
    toastr.error(eMsg, 'Error');    
  }
}

export function* saveDetailsSaga() {
  yield* takeLatest(REQUEST_SAVE_PROFILE, saveDetails);
}

// All sagas to be loaded
export default saveDetailsSaga;