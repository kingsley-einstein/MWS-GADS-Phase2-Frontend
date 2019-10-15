import { User } from '../../models';

export interface UserState {
  data: User | null;
}

export const initialUserState: UserState = {
  data: null
};
