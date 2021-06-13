import {useEffect} from "react"
import {
    IonContent,
    IonIcon,
    IonPage,
    IonGrid,
    IonCol,
} from '@ionic/react'
import {useDispatch, useSelector} from "react-redux"
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

import {getData} from '../firebase/getData'
import {setHoursArray} from '../redux/dateSlice'
import {appStateType} from "../redux"


const Home: React.FC = () => {
    const {hoursArray} = useSelector((state: appStateType) => state.date)
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            const data = await getData()
            dispatch(setHoursArray(data?.time!))
        })()
    }, [])

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
                        {
                            hoursArray.map(elem => <TimeItem key={elem} time={elem}/>)
                        }
                    </DateList>
                    <BookingCard/>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Home
