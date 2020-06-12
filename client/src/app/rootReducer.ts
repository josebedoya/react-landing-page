import { combineReducers } from '@reduxjs/toolkit';

import loginReducer from './../pages/LoginPage/loginSlice';

const rootReducer = combineReducers({
  auth: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
