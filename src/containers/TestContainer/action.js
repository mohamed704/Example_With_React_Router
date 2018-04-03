import { TEST_REDUX } from './constants';

export function extarctDates(data) {
  return {
    type: TEST_REDUX,
    data,
  };
}
