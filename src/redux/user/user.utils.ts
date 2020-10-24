import _ from 'lodash';
import users from '../../components/assets/user.json';
import {User} from '../../redux/user/types';

type UserData = {
  id: number
  username: string
  email: string
  password: string
}

export const findUserByEmail = (email: string): User | null => {
  let result: User | null = null;
  _.each(users, (user: UserData): void => {
    if (user.email === email) {
      result = {
        username: user.username,
        email: user.email,
      };
    }
  });
  
  return result;
};
