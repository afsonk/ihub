import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export type datesObjType = {
    day: string,
    dayNumber: number
}

export type StateType = {
    activeTime: string | null,
    activeDate: number | null,
    hoursArray: string[],
    daysArray: datesObjType[]
}

const initialState:StateType = {
    activeDate: null,
    activeTime: null,
    hoursArray: [],
    daysArray: []
}

const dateSlice = createSlice({
    name: 'date',
    initialState: initialState,
    reducers: {
        setActiveDate(state, action){
            state.activeDate = action.payload
        },
        setActiveTime(state, action){
            state.activeTime = action.payload
        },
        setHoursArray(state, action: PayloadAction<string[]>){
            state.hoursArray = action.payload
        },
        setDatesArray(state, action: PayloadAction<datesObjType[]>){
            state.daysArray = action.payload
        }
    }
})

export default dateSlice.reducer
export const {setActiveDate, setActiveTime, setHoursArray, setDatesArray} = dateSlice.actions