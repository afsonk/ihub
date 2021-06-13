import {ReactNode} from "react"
import {IonRow} from "@ionic/react"

/* reusable slides wrapper */
export function DateList({children}: {children: ReactNode}){
    return <IonRow className={'slides'}>{children}</IonRow>
}