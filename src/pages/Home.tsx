import {
    IonContent,
    IonIcon,
    IonPage,
    IonGrid,
    IonCol,
} from '@ionic/react'

// @ts-ignore
import image from '../assets/img/man.png'
// @ts-ignore
import list from '../assets/img/Vector.svg'
// @ts-ignore
import calen from '../assets/img/Union.svg'
import './Home.css'
import {Header} from "../components/Header/Header"
import {Master} from "../components/Master/Master"
import {Heading} from "../components/Heading/Heading"
import {DateList} from "../components/Date/DateLIst"
import {TimeItem} from "../components/Date/TimeItem"
import {DateItem} from "../components/Date/DateItem"
import {BookingCard} from "../components/BookingCard/BookingCard"

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonGrid class={'main-grid'}>
                    <Header/>
                    <Master/>
                    <Heading text={'Возможная дата'}>
                        <IonCol>
                            <IonIcon src={list} size='9'></IonIcon>
                        </IonCol>
                    </Heading>
                    <DateList>
                        <DateItem/>
                    </DateList>
                    <Heading text={'Свободное время'}></Heading>
                    <DateList>
                        <TimeItem/>
                    </DateList>
                    <BookingCard/>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Home
