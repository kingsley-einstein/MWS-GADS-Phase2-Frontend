import { Action } from '@ngrx/store';

export enum LoadingActions {
  Load = '[Loading] Load',
  LoadEnd = '[Loading] End Loading',
  LoadSuccess = '[Loading] Complete'
}

export class Load implements Action {
  readonly type = LoadingActions.Load;
  constructor() {}
}

export class LoadEnd implements Action {
  readonly type = LoadingActions.LoadEnd;
  constructor() {}
}

export class LoadSuccess implements Action {
  readonly type = LoadingActions.LoadSuccess;
  constructor(public payload: boolean) {}
}

export type LoadTypes = Load | LoadSuccess | LoadEnd;
