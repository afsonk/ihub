import app from "./firebase"
import {datesObjType} from "../redux/dateSlice"


export const getData = async () => {
    /* Get user data from database */
    const database = app.firestore()
    const userData = database.collection("array").doc('dateTime')
    const doc = await userData.get()

    if (!doc.exists) {
        return null
    }

    return doc.data()
}