import dashboardEditSlice from "./dashboardEditSlice";

export const EditModule = {
    id: "dashboardmodule",
    reducerMap: {
        dashboardEdit: dashboardEditSlice,
    },
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
};