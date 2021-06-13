import {IonCard} from "@ionic/react"
import {useDispatch, useSelector} from "react-redux"
import {appStateType} from "../../redux"
import {setActiveTime} from "../../redux/dateSlice"


export function TimeItem({time}: {time: string}){

    const {activeTime} = useSelector((state: appStateType) => state.date)
    const dispatch = useDispatch()

    const handleTimeChange = () => {
        dispatch(setActiveTime(time))
    }

    return (
        <IonCard
            className={`time-item ion-text-center ${activeTime === time ? 'active' : ''}`}
            onClick={handleTimeChange}
        >
            {time}
        </IonCard>
    )
}