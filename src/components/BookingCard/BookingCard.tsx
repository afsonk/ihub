import {IonButton, IonCard, IonCol, IonRow} from "@ionic/react"
import {useSelector} from "react-redux"
import {appStateType} from "../../redux"
import {setBookingDate} from "../../firebase/getData"


export function BookingCard(){

    const {activeTime, activeDate} = useSelector((state: appStateType) => state.date)


    /* set active day and time to the firestore */
    const handleBookingClick = () => {
        setBookingDate(activeTime!,activeDate!)
    }

    return (
        <IonCard className={'bottom-card'}>
            <IonRow className={'booking'}>
                <IonCol>
                    <div className={"ion-text-center"}>
                        <p>Дата</p>
                        <h2>{activeDate} июня</h2>
                    </div>
                </IonCol>
                <IonCol className="ion-text-center">
                    <div className={"ion-text-center"}>
                        <p>Время</p>
                        <h2>{activeTime}</h2>
                    </div>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center date-time">
                <IonButton className={'check-btn'} color="secondary" onClick={handleBookingClick}>
                    ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ ВСТРЕЧУ
                </IonButton>
            </IonRow>
        </IonCard>
    )
}