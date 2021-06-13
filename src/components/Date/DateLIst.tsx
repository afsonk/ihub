import {ReactNode} from "react"
import {IonRow} from "@ionic/react"


export function DateList({children}: {children: ReactNode}){
    return <IonRow>{children}</IonRow>
}