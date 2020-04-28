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
          <IonTitle>Fuzzy Friend Finder</IonTitle>
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

          <IonCardContent>
          <IonImg src="https://cdn.discordapp.com/attachments/666476760803573792/704482158944845824/FuzzyFriendFinderV3.png" />
          
          </IonCardContent>
          <IonCardContent>
          <p>The mission statement of Fuzzy Friend Finder is in direct relation to that of the Idaho Humane Society. Together, we advocate for the welfare and responsible care of animals, protect them from neglect and cruelty, and promote humane education, awareness, and compassion. We believe that because domestic animals are a product of human intervention, we have a special obligation to them in regard to humane treatment and responsible stewardship.</p>
          </IonCardContent>
          {}


        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
