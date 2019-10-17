import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { FavoriteActions, LoadFavorites, LoadFavoritesSuccess } from '../actions';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpService } from '../../services';

@Injectable()
export class FavoriteEffects {
  constructor(private _actions: Actions, private _service: HttpService) {}

  @Effect()
  getFavorites$ = this._actions.pipe(
    ofType<LoadFavorites>(FavoriteActions.LoadFavorite),
    switchMap(() => this._service.getFavorites()),
    switchMap((value) => of(new LoadFavoritesSuccess(value.data)))
  );
}
