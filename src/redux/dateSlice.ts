import {createSlice, PayloadAction} from "@reduxjs/toolkit"

type datesObjType = {
    day: string,
    dayNumber: number
}

export type StateType = {
    activeTime: string,
    activeDate: datesObjType,
    hoursArray: string[],
    daysArray: datesObjType[]
}

const initialState:StateType = {
    activeDate: {
        day: 'Сегодня',
        dayNumber: 26
    },
    activeTime: '11:30',
    hoursArray: [],
    daysArray: []
}

const dateSlice = createSlice({
    name: 'date',
    initialState: initialState,
    reducers: {
        setActiveDate(state, action){
            state.activeDate.day = action.payload.day
            state.activeDate.dayNumber = action.payload.dayNumber
        },
        setActiveTime(state, action){
            state.activeTime = action.payload
        },
        setHoursArray(state, action: PayloadAction<string[]>){
            state.hoursArray = action.payload
        }
    }
})

export default dateSlice.reducer
export const {setActiveDate, setActiveTime, setHoursArray} = dateSlice.actions