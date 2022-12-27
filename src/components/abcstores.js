import dashboardEditSlice from "./features/dashboardEditSlice";
//import { registerReducers } from "@govi/shared/shared-state";
//import {store} from "@govi/shared/shared-state";
//import { combineReducers } from "@reduxjs/toolkit";
//import {reducerRegistry} from '@govi/shared/shared-state';
import { configureStore } from "@reduxjs/toolkit";

export const storess = configureStore({
  reducer: {
    edit: dashboardEditSlice
  },
});

// https://redux.js.org/usage/usage-with-typescript#define-root-state-and-dispatch-types
// export type RootStates = ReturnType<typeof stores.getState>
