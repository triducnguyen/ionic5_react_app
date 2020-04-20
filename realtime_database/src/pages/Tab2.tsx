import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonThumbnail, IonImg, IonCard, IonCardContent,
  IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cat Available</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        
      </IonContent>
      <IonCard>
        
          <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>           
          </IonCardHeader>

          <IonCardContent>
          <IonImg src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&w=1000&q=80" />
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </IonCardContent>
        </IonCard>
    </IonPage>
  );
};

export default Tab2;
