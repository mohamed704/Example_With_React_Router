import { fromJS } from 'immutable';
import { TEST_REDUX } from './constants';

const initialState = fromJS({
  data: null,
});

export function testReduxReducer(state = initialState, action) {
  switch (action.type) {
    case TEST_REDUX:
      return state.set('data', action.data);
    default:
      return state;
  }
}
