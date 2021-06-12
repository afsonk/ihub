import {
    IonContent,
    IonIcon,
    IonPage,
    IonTitle,
    IonCard,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonText,
} from '@ionic/react'

// @ts-ignore
import image from '../assets/img/man.png'
// @ts-ignore
import list from '../assets/img/Vector.svg'
// @ts-ignore
import calen from '../assets/img/Union.svg'
import './Home.css'

const Home: React.FC = () => {

    return (
        <IonPage>
            <IonContent>
                <IonGrid class={'main-grid'}>
                    <IonRow>
                        <IonTitle class="ion-text-center">
                            <h3>
                                Алексей Карачинский
                            </h3>
                        </IonTitle>
                    </IonRow>

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
                    <IonRow class={'heading'}>
                        <IonCol size='9'>
                            <IonText >
                                Возможная дата
                            </IonText>
                        </IonCol>
                        <IonCol>
                            <IonIcon src={list} size='9'></IonIcon>
                        </IonCol>
                    </IonRow>
                    <IonRow class={'slides'}>
                        <IonCard class={"date-item ion-text-center active"}>
                            <p>Сегодня</p>
                            <h2>26</h2>
                        </IonCard>
                    </IonRow>
                    <IonRow class={'heading'}>
                        <IonCol size='12'>
                            <IonText>
                                Свободное время
                            </IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow class={'slides'}>
                        <IonCard class={'time-item ion-text-center'}>
                            11:20
                        </IonCard>
                        <IonCard class={'time-item ion-text-center active'}>
                            11:20
                        </IonCard>
                        <IonCard class={'time-item ion-text-center'}>
                            11:20
                        </IonCard>
                        <IonCard class={'time-item ion-text-center'}>
                            11:20
                        </IonCard>
                        <IonCard class={'time-item ion-text-center'}>
                            11:20
                        </IonCard>
                        <IonCard class={'time-item ion-text-center'}>
                            11:20
                        </IonCard>
                    </IonRow>
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
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Home
