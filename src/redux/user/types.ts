export interface User {
  username: string
  email: string
}

export interface UserLogin {
  email: string
  password: string
}

export interface UserState {
  user: User | null
}

interface SetCurrentUserAction {
  type: string
  payload: UserLogin
}

export type UserActionTypes = SetCurrentUserAction