import { combineReducers } from '@reduxjs/toolkit';

import loginReducer from './../pages/LoginPage/loginSlice';
import charactersReducer from './../pages/HomePage/characterSlice';

const rootReducer = combineReducers({
  auth: loginReducer,
  characters: charactersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
