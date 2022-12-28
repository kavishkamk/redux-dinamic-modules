import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export type KeycloakInfo = {isAuthenticated: boolean, token: string, realm: string}

//realms defined in keycloak
export const realms = ['a', 'b'];

const initialState = {
    isAuth: false,
    keycloakInfo: { isAuthenticated: false, token: '', realm: '' }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.isAuth = !state.isAuth;
            state.keycloakInfo = action.payload
        }
    }
})

export const { setAuth } = authSlice.actions;

export default authSlice.reducer; 