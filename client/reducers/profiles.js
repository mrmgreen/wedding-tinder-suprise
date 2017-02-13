import { CURRENT_PROFILE } from '../actions/types';

export default function profiles(state = null, action) {
  switch (action.type) {
    case CURRENT_PROFILE:
      return Object.assign({}, state, action.payload.currentProfile);
    default:
      return  state;
  }
}
