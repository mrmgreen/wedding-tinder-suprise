import { createAction } from 'redux-actions';
import CURRENT_PROFILE from './types';

export const currentProfile = createAction(CURRENT_PROFILE, (profile) => ({profile}));
