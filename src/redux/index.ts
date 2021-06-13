import {configureStore,combineReducers} from "@reduxjs/toolkit"

import dataSlice from "./dateSlice"


const rootReducer = combineReducers({
    date: dataSlice
})

const store = configureStore({
    reducer: rootReducer,
})

type returnType = typeof rootReducer

export type appStateType = ReturnType<returnType>
export type appDispatchType = typeof store.dispatch

export default store