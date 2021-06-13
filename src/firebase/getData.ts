import app from "./firebase"
import {datesObjType} from "../redux/dateSlice"


export type firebaseType = {time: string[],
    date: datesObjType[],
    activeDate: number,
    activeTime: string}

const database = app.firestore()

export const getData = async () => {
    /* Get user data from database */
    const userData = await database.collection("array").doc('dateTime')
    const doc = await userData.get()

    if (!doc.exists) {
        return null
    }

    return doc.data() as firebaseType
}

export const setBookingDate = async (activeTime: string, activeDate: number) => {
    /* Add content to user favorites  */
    // prevent making changes to other data

    const userData = await database.collection("array").doc('dateTime')
    const doc = await userData.get()
    let data = doc.data() as firebaseType

    if (data?.activeDate && data?.activeTime) {
        return userData.set({
            ...data,
            activeDate,
            activeTime
        })
    }
    return userData.set({
        ...data,
        activeDate,
        activeTime
    })

}