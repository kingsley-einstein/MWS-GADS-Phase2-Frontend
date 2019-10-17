import { FavoriteActions, LoadFavoriteTypes } from '../actions';
import { FavoriteState, initialFavoriteState } from '../states';

export default (state: FavoriteState = initialFavoriteState, action: LoadFavoriteTypes) : FavoriteState => {
  switch (action.type) {
    case FavoriteActions.LoadFavoriteSuccess:
      return {
        ...state,
        data: action.payload
      };
    case FavoriteActions.LoadFavoritesSuccess:
      return {
        ...state,
        favorites: action.payload
      }
    default:
      return state;
  }
};
