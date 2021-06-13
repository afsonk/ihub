import {createSlice, PayloadAction} from "@reduxjs/toolkit"


/* types for the redux store*/
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

/* dateSlice stores hour and date arrays, active date of the week and active time*/
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
/* dateSlice actions */
export const {setActiveDate, setActiveTime, setHoursArray, setDatesArray} = dateSlice.actions