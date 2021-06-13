import {IonCol, IonIcon, IonRow, IonText} from "@ionic/react"
import {ReactNode} from "react"


type Props = {
    children?: ReactNode,
    text: string
}

export function Heading({children, text}: Props){
    return(
        <IonRow className={'heading'}>
            <IonCol size={children ? '9' : '12'}>
                <IonText>
                    {text}
                </IonText>
            </IonCol>
            {children}
        </IonRow>
    )
}