import authReducerSlice from "./authSlice";

export const UsersModule = {
    id: "authm",
    reducerMap: {
        users: authReducerSlice,
    },
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
};