import {IonButton, IonCard, IonCol, IonRow} from "@ionic/react"


export function BookingCard(){
    return (
        <IonCard class={'bottom-card'}>
            <IonRow class={'booking'}>
                <IonCol>
                    <div className={"ion-text-center"}>
                        <p>Дата</p>
                        <h2>26 мая</h2>
                    </div>
                </IonCol>
                <IonCol class="ion-text-center">
                    <div className={"ion-text-center"}>
                        <p>Время</p>
                        <h2>18:30</h2>
                    </div>
                </IonCol>
            </IonRow>
            <IonRow class="ion-justify-content-center date-time">
                <IonButton class={'check-btn'} color="secondary">
                    ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ ВСТРЕЧУ
                </IonButton>
            </IonRow>
        </IonCard>
    )
}