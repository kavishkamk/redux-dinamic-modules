import dashboardEditSlice from "./dashboardEditSlice";

export const EditModule = {
    id: "dashboardm",
    reducerMap: {
        dasd: dashboardEditSlice,
    },
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
};