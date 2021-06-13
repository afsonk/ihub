import app from "./firebase"
import {datesObjType} from "../redux/dateSlice"



/* firebase response data type */
export type firebaseType = {time: string[],
    date: datesObjType[],
    activeDate: number,
    activeTime: string
}


const database = app.firestore()

export const getData = async () => {
    /* Get data from database */
    const userData = await database.collection("array").doc('dateTime')
    const doc = await userData.get()

    /* Check if the data exists */
    if (!doc.exists) {
        return null
    }

    return doc.data() as firebaseType
}

export const setBookingDate = async (activeTime: string, activeDate: number) => {
    /* Add booking time and date  */

    const userData = await database.collection("array").doc('dateTime')
    const doc = await userData.get()
    let data = doc.data() as firebaseType


    /* Making a copy of existing data, and setting active time and data  */
    return userData.set({
        ...data,
        activeDate,
        activeTime
    })

}