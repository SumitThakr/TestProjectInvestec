import { InitialState } from './InitialState';
import { ActionTypes } from '../constants';

export const Reducer = (state = InitialState, action: any) => {
  console.log('action',action);
  switch (action.type) {
    case ActionTypes.SET_NAME:
      console.log(action.type,action.data);
      return {
        ...state,
        name: action.data
      };

    default:
      return state;
  }
}