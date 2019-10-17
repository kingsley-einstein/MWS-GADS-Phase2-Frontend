import { AppState } from '../states';

export const selectUser = (state: AppState) => state.userState.data;
