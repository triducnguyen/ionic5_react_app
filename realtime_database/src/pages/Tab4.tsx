import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton } from '@ionic/react';

export const Tab4: React.FC = () => {

  const [text1, setText1] = useState<string>();
  const [text2, setText2] = useState<string>();
  const [text3, setText3] = useState<string>();
  const [number, setNumber] = useState<number>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Apply</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>First Name</IonItemDivider>
          <IonItem>
            <IonInput value={text1} onIonChange={e => setText1(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItemDivider>Last Name</IonItemDivider>
          <IonItem>
            <IonInput value={text2} onIonChange={e => setText2(e.detail.value!)} clearInput></IonInput>
          </IonItem>

          <IonItemDivider>Address</IonItemDivider>
          <IonItem>
            <IonInput value={text3} onIonChange={e => setText3(e.detail.value!)} clearInput></IonInput>
          </IonItem>

          <IonItemDivider>Phone Number</IonItemDivider>
          <IonItem>
            <IonInput type="number" value={number} onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>


        </IonList>

        <IonButton>Thanks for your application</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;