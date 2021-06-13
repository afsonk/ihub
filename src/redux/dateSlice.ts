import {createSlice} from "@reduxjs/toolkit"

export type StateType = {
    activeTime: string,
    activeDate: {
        day: string,
        dayNumber: number
    }
}

const initialState:StateType = {
    activeDate: {
        day: 'Сегодня',
        dayNumber: 26
    },
    activeTime: '11:30'
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
        }
    }
})

export default dateSlice.reducer
export const {setActiveDate, setActiveTime} = dateSlice.actions