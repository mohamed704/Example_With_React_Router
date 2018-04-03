import { fromJS } from 'immutable';
import { EXTRACT_DATES } from './constants';

const initialState = fromJS({
  data: null,
});

export function scrollDayReducer(state = initialState, action) {
  switch (action.type) {
    case EXTRACT_DATES:
      return state.set('data', action.data);
    default:
      return state;
  }
}
