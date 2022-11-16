import { createReducer } from '@reduxjs/toolkit';
import { set_filter } from './filter -actions';

const filterReducer = createReducer('', {
  [set_filter]: (_, { payload }) => payload,
});

export default filterReducer;
