import { createAction } from 'redux-actions';
const CURRENT_PROFILE = "CURRENT_PROFILE";

export const currentProfile = createAction(CURRENT_PROFILE, (profile) => ({profile}));
