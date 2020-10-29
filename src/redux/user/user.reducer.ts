import {UserActionConstTypes} from './user.types';
import { User, UserState, UserActionTypes } from './types';
import { findUserByEmail } from './user.utils';

const INITIAL_STATE = null;

const UserReducer = (state: User | null = INITIAL_STATE, action: UserActionTypes): User | null => {
  switch (action.type) {
    case UserActionConstTypes.SET_CURRENT_USER:
      return findUserByEmail(action.payload.email);
    default:
      return state;
  }
};

export default UserReducer;
