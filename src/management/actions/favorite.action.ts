import { Action } from '@ngrx/store';
import { Favorite } from '../../models';

export enum FavoriteActions {
  LoadFavorite = '[Favorite] Load A Favorite Item',
  LoadFavorites = '[Favorite] Load All Favorite Items',
  LoadFavoriteSuccess = '[Favorite] Load A Favorite Item Successfully',
  LoadFavoritesSuccess = '[Favorite] Load All Favorite Items Successfully'
}

export class LoadFavorite implements Action {
  readonly type = FavoriteActions.LoadFavorite;
  constructor() {}
}

export class LoadFavoriteSuccess implements Action {
  readonly type = FavoriteActions.LoadFavoriteSuccess;
  constructor(public payload: Favorite) {}
}

export class LoadFavorites implements Action {
  readonly type = FavoriteActions.LoadFavorites;
  constructor() {}
}

export class LoadFavoritesSuccess implements Action {
  readonly type = FavoriteActions.LoadFavoritesSuccess;
  constructor(public payload: Favorite[]) {}
}

export type LoadFavoriteTypes = LoadFavorite | LoadFavoriteSuccess | LoadFavorites | LoadFavoritesSuccess;
