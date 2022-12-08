import { configureStore } from "@reduxjs/toolkit"
import { useDispatch,useSelector , TypedUseSelectorHook } from "react-redux"
import resumeSlice from "./features/resumeSlice"

const store = configureStore({
    reducer : {
        resume : resumeSlice
    }
})

console.log("store state: ", typeof store.getState)
console.log("store dispatch: ", typeof store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch : ()=>AppDispatch = useDispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector

export default store