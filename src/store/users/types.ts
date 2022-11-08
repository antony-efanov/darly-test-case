export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  keyword: string;
}

export interface InitialState {
  users: User[];
  loading: string;
}
