import {createSlice} from "@reduxjs/toolkit";
import LoginReducer from "./login-reducer"

interface LoginState { 
    isLoggedIn: boolean
    bearerToken: string
    name: string
    email: string
    tokenExpiration: number
    roles: string[]
}


export const initialState: LoginState = {
    isLoggedIn: false,
    bearerToken: "",
    name: "",
    email: "",
    tokenExpiration: 0,
    roles: []
}

const loginSlice = createSlice({
    name: "auth",
    initialState, 
    reducers: LoginReducer
})


export const { setLoggedinUser, setLogoutUser } = loginSlice.actions

export default loginSlice.reducer



