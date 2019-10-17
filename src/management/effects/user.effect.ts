import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { UserActions, LoadUser, LoadUserSuccess } from '../actions';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpService } from '../../services';

@Injectable()
export class UserEffects {
  constructor(private _actions: Actions, private _service: HttpService) {}
  
  @Effect()
  getUser$ = this._actions.pipe(
    ofType<LoadUser>(UserActions.LoadUser),
    switchMap(() => this._service.getLoggedUser()),
    switchMap((value) => of(new LoadUserSuccess(value.data)))
  );
}
