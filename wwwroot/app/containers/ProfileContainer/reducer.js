/*
 *
 * ProfileContainer reducer
 *
 */

import { fromJS } from 'immutable';
import initialState from '../../_shared/initialState';

import {
  REQUEST_PROFILE_SUCCEEDED,
  REQUEST_UPLOAD_PICTURE_SUCCEEDED
} from './constants';

function profileContainerReducer(state = fromJS(initialState.profile), action) {
  switch (action.type) {
    case REQUEST_PROFILE_SUCCEEDED:
      return state.set('userDetails', fromJS(action.details));
    case REQUEST_UPLOAD_PICTURE_SUCCEEDED:
      return state.setIn(['userDetails', 'profilePictureUrl'], action.image);      
    default:
      return state;
  }
}

export default profileContainerReducer;
