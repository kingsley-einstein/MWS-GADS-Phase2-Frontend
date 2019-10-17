import { Action } from '@ngrx/store';
import { User } from '../../models';

export enum UserActions {
  LoadUser = '[User] Load User',
  LoadUserSuccess = '[User] Load A User Successfully'
}

export class LoadUser implements Action {
  readonly type = UserActions.LoadUser;
  constructor() {}
}

export class LoadUserSuccess implements Action {
  readonly type = UserActions.LoadUserSuccess;
  constructor(public payload: User) {}
}

export type LoadUserTypes = LoadUser | LoadUserSuccess;
