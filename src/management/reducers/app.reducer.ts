import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../states';
import favoriteReducer from './favorite.reducer';
import loadingReducer from './loading.reducer';
import userReducer from './user.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  favoriteState: favoriteReducer,
  loadingState: loadingReducer,
  userState: userReducer
}
