import { LoadTypes, LoadingActions } from '../actions';
import { LoadingState, initialLoadingState } from '../states';

export default (state: LoadingState = initialLoadingState, action: LoadTypes) : LoadingState => {
  switch (action.type) {
    case LoadingActions.LoadSuccess:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};
