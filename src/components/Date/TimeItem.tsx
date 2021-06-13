import {IonCard} from "@ionic/react"


export function TimeItem({time}: {time: string}){
    return (
        <IonCard class={'time-item ion-text-center'}>
            {time}
        </IonCard>
    )
}