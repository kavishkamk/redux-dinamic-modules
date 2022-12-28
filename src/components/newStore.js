import { createStore } from "redux-dynamic-modules";
import { UsersModule } from "./features/authModule";

export const newstore = createStore(
    {
        initialState: {},
        //extensions: [],
        //enhancers: [],
        //advancedCombineReducers: null
    },
    /* ...any additional modules */
);