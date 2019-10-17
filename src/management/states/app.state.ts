import { FavoriteState } from './favorite.state';
import { LoadingState } from './loading.state';
import { UserState } from './user.state';

export interface AppState {
  userState: UserState;
  favoriteState: FavoriteState;
  loadingState: LoadingState;
}
