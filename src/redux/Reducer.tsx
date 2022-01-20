import { InitialState } from './InitialState';
import { ActionTypes } from '../constants';

export const Reducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_NAME:
      return {
        ...state,
        name: action.data
      };

    default:
      return state;
  }
}