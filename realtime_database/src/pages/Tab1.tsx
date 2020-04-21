import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage,
  IonCard, IonTitle, IonToolbar, IonCardHeader,IonCardContent, IonImg, IonThumbnail,CreateAnimation } from '@ionic/react';
import './Tab1.css';
import AddItem from '../AddItem';
import ItemList from '../itemList';

const Tab1: React.FC = () => {

  const [current,setCurrent] = useState(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Kitty Adopt</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        {}
        
        <IonCard>
          <IonCardHeader>
          <h3>Group list of tasks:</h3>
          </IonCardHeader>
          <IonCardContent>
            <AddItem initialValue={current} clear={()=>setCurrent(null)}/>
          </IonCardContent>
          {}
          <ItemList doEdit={setCurrent}/>

        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
