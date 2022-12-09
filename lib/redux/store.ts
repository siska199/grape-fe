import { configureStore,} from "@reduxjs/toolkit"
import { useDispatch,useSelector , TypedUseSelectorHook } from "react-redux"
import resumeReducer from "./features/resumeSlice"
import storage from "redux-persist/lib/storage"
import { combineReducers,  } from "@reduxjs/toolkit"
import {persistStore,persistReducer,FLUSH, REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from "redux-persist"

const persistConfig = {
    key : "root",
    version :1,
    storage
}

const reducer = combineReducers({
    resume : resumeReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer : persistedReducer,
    middleware : (getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
    })
})

const persistor = persistStore(store)

console.log("store state: ", typeof store.getState)
console.log("store dispatch: ", typeof store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch : ()=>AppDispatch = useDispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector

export {store, persistor}