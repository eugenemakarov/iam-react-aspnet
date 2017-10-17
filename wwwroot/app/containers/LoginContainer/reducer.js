/*
 *
 * LoginContainer reducer
 *
 */

import { fromJS } from 'immutable';
import initialState from '../../_shared/initialState';

import {
  REQUEST_APP_INFO_SUCCEEDED,
  LOGIN_REQUEST_SUCCEEDED,
  LOGIN_REQUEST_FAILED,
  REQUEST_USER_IMAGE_SUCCEEDED
} from './constants';

function loginContainerReducer(state = fromJS(initialState.loginContainer), action) {
  switch (action.type) {
    case REQUEST_APP_INFO_SUCCEEDED:
      return state
        .update('appInfo', appInfo => appInfo = action.appInfo);
    case LOGIN_REQUEST_SUCCEEDED:
      return state
        .update('isFailed', isFailed => isFailed = false);
    case LOGIN_REQUEST_FAILED:
      return state
        .update('isFailed', isFailed => isFailed = true);
    case REQUEST_USER_IMAGE_SUCCEEDED:
      return state
        .update('userImgURL', imgURL => imgURL = action.imageUrl);
    default:
      return state;
  }
}

export default loginContainerReducer;
