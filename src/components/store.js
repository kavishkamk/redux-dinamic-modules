import authReducerSlice from "./features/authSlice";
//import { registerReducers } from "@govi/shared/shared-state";
//import {store} from "@govi/shared/shared-state";
//import { combineReducers } from "@reduxjs/toolkit";
//import {reducerRegistry} from '@govi/shared/shared-state';
import { configureStore } from "@reduxjs/toolkit";

export const stores = configureStore({
  reducer: {
    auth: authReducerSlice
  },
});

// https://redux.js.org/usage/usage-with-typescript#define-root-state-and-dispatch-types
// export type RootStates = ReturnType<typeof stores.getState>












//registerReducers(authReducerSlice);
//reducerRegistry.register("auth", authReducerSlice);

// const authReducers = {
//     auth: authReducerSlice
// }
    
//injectReducers(authReducers);

// const containerReducers = {};

// store.replaceReducer(
//     combineReducers({ ...containerReducers, ...authReducerSlice })
//   );