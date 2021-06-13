import {IonCard} from "@ionic/react"
import {useSelector} from "react-redux"
import {appStateType} from "../../redux"


export function DateItem(){

    const {activeDate} = useSelector((state: appStateType) => state.date)

    return (
        <IonCard class={"date-item ion-text-center active"}>
            <p>{activeDate.day}</p>
            <h2>{activeDate.dayNumber}</h2>
        </IonCard>
    )
}