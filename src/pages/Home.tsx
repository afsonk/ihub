import {useEffect} from "react"
import {
    IonContent,
    IonIcon,
    IonPage,
    IonGrid,
    IonCol,
} from '@ionic/react'
import {useDispatch, useSelector} from "react-redux"

import list from '../assets/img/Vector.svg'
import './Home.css'

import {getData} from '../firebase/getData'
import {appStateType} from "../redux"
import {setHoursArray, setDatesArray, setActiveTime, setActiveDate} from '../redux/dateSlice'
import {BookingCard, DateItem, DateList, Header, Heading, Master, TimeItem} from "../components"


const Home: React.FC = () => {
    const {hoursArray, daysArray} = useSelector((state: appStateType) => state.date)
    const dispatch = useDispatch()

    const fetchDataOnLoad = async () => {
        const data = await getData()
        dispatch(setHoursArray(data?.time!))
        dispatch(setDatesArray(data?.date!))
        dispatch(setActiveDate(data?.activeDate))
        dispatch(setActiveTime(data?.activeTime))
    }

    useEffect(() => {
           fetchDataOnLoad()
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
                        {
                            daysArray?.map(elem => <DateItem key={elem.day} dayNumber={elem.dayNumber} day={elem.day}/>)
                        }
                    </DateList>
                    <Heading text={'Свободное время'}></Heading>
                    <DateList>
                        {
                            hoursArray?.map(elem => <TimeItem key={elem} time={elem}/>)
                        }
                    </DateList>
                    <BookingCard/>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Home
