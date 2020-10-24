import {UserActionConstTypes} from './user.types';

import { UserLogin, UserActionTypes } from './types';

export const SetCurrentUser = (user: UserLogin): UserActionTypes => {
  return {
    type: UserActionConstTypes.SET_CURRENT_USER,
    payload: user
  };
};