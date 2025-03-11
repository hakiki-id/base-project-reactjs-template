import {initialState} from "./login-slice"
import type { PayloadAction } from "@reduxjs/toolkit"
import {AuthResponseType} from "@/services/authentication/auth-response-type"
const loginReducer = { 
        setLogoutUser: (state) => {
            state = initialState
        },
        setLoggedinUser: (state, action: PayloadAction<AuthResponseType>) => {
            state.isLoggedIn = true
            state.bearerToken = action.payload.token
            state.name = action.payload.name
            state.email = action.payload.email
            state.expiration = action.payload.expiration
        }
}

export default loginReducer