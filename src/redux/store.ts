import {configureStore, combineReducers} from "@reduxjs/toolkit"
import LoginSlice from "./features/login/login-slice"
import {persistStore, persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

// persist configuration 
const persistConfig = { 
    key: 'root', 
    version: 1, 
    whitelist: ['auth'],
    storage
}

const rootReducer = combineReducers({
    auth: LoginSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: true
        })
    },
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch