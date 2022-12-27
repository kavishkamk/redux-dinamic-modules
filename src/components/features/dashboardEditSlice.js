import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEdit: false
}

const dashboardEditSlice = createSlice({
    name: 'dashboard-edit',
    initialState,
    reducers: {
        editDashboard: (state) => {
            state.isEdit = !state.isEdit
        }
    }
})

export const { editDashboard } = dashboardEditSlice.actions;

export default dashboardEditSlice.reducer;