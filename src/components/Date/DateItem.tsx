import {IonCard} from "@ionic/react"
import {useSelector} from "react-redux"
import {appStateType} from "../../redux"


type Props = {
    day: string,
    dayNumber: number
}

export function DateItem({day, dayNumber}:Props){

    const {activeDate} = useSelector((state: appStateType) => state.date)

    return (
        <IonCard class={"date-item ion-text-center active"}>
            <p>{day}</p>
            <h2>{dayNumber}</h2>
        </IonCard>
    )
}