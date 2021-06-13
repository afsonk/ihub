import {IonCard} from "@ionic/react"
import {useDispatch, useSelector} from "react-redux"
import {appStateType} from "../../redux"
import {setActiveDate} from "../../redux/dateSlice"


type Props = {
    day: string,
    dayNumber: number
}

export function DateItem({day, dayNumber}:Props){

    const {activeDate} = useSelector((state: appStateType) => state.date)
    const dispatch = useDispatch()

    /*set active date to the redux store*/
    const handleDayChange = () => {
        dispatch(setActiveDate(dayNumber))
    }

    return (
        <IonCard
            className={`date-item ion-text-center ${activeDate === dayNumber ? 'active' : ''}`}
            onClick={handleDayChange}
        >
            <p>{day}</p>
            <h2>{dayNumber}</h2>
        </IonCard>
    )
}