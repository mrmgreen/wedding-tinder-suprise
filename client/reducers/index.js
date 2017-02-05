import { currentProfile } from './actions'

export default function mainReducer(state = 0;, action) {
  switch(action.type) {
    case CURRENT_PROFILE:
      if (action.payload.profile) {
        return action.payload.profile;
      }
    default:
      return state;
  }
}
