import { configureStore } from "@reduxjs/toolkit"
import { useDispatch,useSelector , TypedUseSelectorHook } from "react-redux"
import resumeSlice from "./features/resumeSlice"

const store = configureStore({
    reducer : {
        resume : resumeSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch : ()=>AppDispatch = useDispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector

export default store