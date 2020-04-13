import React, { useState, useEffect} from 'react';
import {IonItem, IonLabel, IonText, IonItemSliding,
IonItemOption, IonItemOptions, IonIcon} from '@ionic/react';
import {document, trash} from 'ionicons/icons'

export default function Item({doEdit, doDelete, doc}) {
    let data = doc.data();

    return (
        <IonItemSliding>
            <IonItem>
                <IonLabel class="ion-text-wrap">
                    <IonText className = "item-tilte">
                        <div>{data.name}
                        </div>
                    </IonText>
                    <IonText className="item-sub-title">
                        <div>
                            {new Date(data.createdOn) + ""}
                        </div>
                    </IonText>
                    <IonText className="item-id">
                        {doc.id}
                    </IonText>
                </IonLabel>
                <div></div>
            </IonItem>
            <IonItemOptions>

                <IonItemOption onClick={() =>{
                    doEdit(doc.id);
                     }}>
                    <IonIcon slot="icon-only" icon={document}>                        
                    </IonIcon>
                </IonItemOption>

                <IonItemOption onClick={() => doDelete(doc.id)} color="danger">
                    <IonIcon slot="icon-only" icon={trash}>                       
                    </IonIcon>
                </IonItemOption>
            
            </IonItemOptions>
        </IonItemSliding>
    );
}