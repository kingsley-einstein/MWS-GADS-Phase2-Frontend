import { UserActions, LoadUserTypes } from '../actions';
import { UserState, initialUserState } from '../states';

export default (state: UserState = initialUserState, action: LoadUserTypes) : UserState => {
  switch (action.type) {
    case UserActions.LoadUserSuccess:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
