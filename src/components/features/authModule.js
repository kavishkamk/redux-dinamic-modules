import authReducerSlice from "./authSlice";

export const AuthModule = {
    id: "authmodule",
    reducerMap: {
        auth: authReducerSlice,
    },
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
};