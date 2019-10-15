import { Favorite } from '../../models';

export interface FavoriteState {
  data: Favorite | null;
  favorites: Favorite[];
}

export const initialFavoriteState: FavoriteState = {
  data: null,
  favorites: []
};
