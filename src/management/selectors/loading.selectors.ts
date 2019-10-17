import { AppState } from '../states';

export const selectLoading = (state: AppState) => state.loadingState.isLoading;
