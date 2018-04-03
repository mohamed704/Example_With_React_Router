import { EXTRACT_DATES } from './constants';

export function extarctDates(data) {
  return {
    type: EXTRACT_DATES,
    data,
  };
}
