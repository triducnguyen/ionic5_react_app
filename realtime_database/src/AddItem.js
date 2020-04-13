import React, { useState, useEffect } from 'react';
import Item from './item';
import firebase from 'firebase';
import {useDocument} from "react-firebase-hooks/firestore"
import {IonItem, IonLabel, IonText, IonItemSliding,
IonItemOption, IonItemOptions, IonIcon, IonButton, IonInput} from '@ionic/react';

function AddItem({initialValue, clear}) {
    const [item, setItem] = useState("");
    const [value, loading, error] = useDocument(
        firebase.firestore().doc("items/" + initialValue),{
            snapshotListenOptions: {includeMetadataChanges:true}
        }
    );

    useEffect(() =>{
        !loading && initialValue && value.exists && setItem(value.data().name);
    },
    [loading, initialValue, value]);

    const onSave = async() =>{
        let collectionRef = firebase.firestore().collection("items");
        if(initialValue) {
            await (collectionRef).doc(initialValue).set({name: item, createdOn: new Date().getTime()}, {merge:true} );
            setItem("");
            clear();
        }
        else{
            await collectionRef.add({name:item, createdOn: new Date().getTime()})
            setItem("");
            clear();
        }
    };

    return (
        <>
            <IonItem>
                <IonInput value={item} onInput={e => setItem(e.target.value)}>
                </IonInput>
            </IonItem>
            <IonButton style={{marginTop:8}} onclick={onSave}>Save</IonButton>
            <IonButton style={{marginTop:8}} onclick={() =>{
                setItem("");
                clear();
            }}>Clear</IonButton>
        </>
    )
}
export default AddItem;