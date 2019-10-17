import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { LoadingActions, Load, LoadSuccess, LoadEnd } from '../actions';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class LoadingEffects {
  constructor(private _actions: Actions) {}

  @Effect()
  startLoad$ = this._actions.pipe(
    ofType<Load>(LoadingActions.Load),
    switchMap(() => of(new LoadSuccess(true)))
  );

  @Effect()
  endLoad$ = this._actions.pipe(
    ofType<LoadEnd>(LoadingActions.LoadEnd),
    switchMap(() => of(new LoadSuccess(false)))
  );
}
