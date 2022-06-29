export interface User {
  login: string;
  id: string;
  avatar_url: string;
}

export interface SaveUserAction {
  type: string;
  payload: User[];
}
