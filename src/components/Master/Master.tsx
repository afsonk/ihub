import {IonCard, IonCol, IonImg, IonRow, IonText} from "@ionic/react"
import image from "../../assets/img/man.png"


export function Master(){
    return(
        <IonCard class={'master-card'}>
            <IonRow class={'picture'}>
                <IonCol>
                    <IonImg class={'background'}
                            src={image}
                            alt="avatar"
                    />
                </IonCol>
                <IonCol class="ion-text-center">
                    <IonText>
                        Длительность
                        консультации
                    </IonText>
                    <h2>50 минут</h2>
                </IonCol>
            </IonRow>
        </IonCard>
    )
}