import { AppState } from '../states';

export const selectFavorite = (state: AppState) => state.favoriteState.data;
export const selectFavorites = (state: AppState) => state.favoriteState.favorites;
