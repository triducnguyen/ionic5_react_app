import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonThumbnail, IonImg, IonCard, IonCardContent,
  IonCardHeader, IonCardTitle, IonCardSubtitle, IonModal, IonButton } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {

  const [showModal,  setShowModal] = useState(false);
  const [showModal1,  setShowModal1] = useState(false);
  const [showModal2,  setShowModal2] = useState(false);

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Cat Available</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonCard>
          <IonCardHeader>
          <IonCardTitle>Paslode </IonCardTitle>
          <IonCardSubtitle>(Orange Tabby, Female)</IonCardSubtitle>           
          </IonCardHeader>
            <IonCardContent>
            Paslode loves everyone and is incredibly friendly. 
            She enjoys playing and snuggling up on laps. 
            Paslode would be a great addition to any family 
            and would get along with both children and other pets. 

              
            </IonCardContent>
            <IonCardContent>
            <IonModal isOpen={showModal}>
              <IonImg src="https://cdn.discordapp.com/attachments/666476760803573792/704464203427086427/20200427_164754.jpg"></IonImg>
              <IonButton onClick={() => setShowModal(false)}>Close</IonButton>

              </IonModal>
              <IonButton onClick={() => setShowModal(true)}>Paslode</IonButton>
            </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
          <IonCardTitle>Caterpillar</IonCardTitle>
          <IonCardSubtitle>(Black-White Tuxedo, Male)</IonCardSubtitle>           
          </IonCardHeader>
            <IonCardContent>
            Caterpillar, named after the construction site he was found on, 
            loves to sit in your lap and snuggle up under your chin. 
            While he can be timid at first, he warms up quickly. 
            Caterpillar would be a great addition in any home and 
            gets along with children and other pets. 

              
            </IonCardContent>
            <IonCardContent>
            <IonModal isOpen={showModal1}>
              <IonImg src="https://media.discordapp.net/attachments/666476760803573792/704464512765394991/20200427_164358.jpg?width=349&height=466"></IonImg>
              <IonButton onClick={() => setShowModal1(false)}>Close</IonButton>
              </IonModal>
              <IonButton onClick={() => setShowModal1(true)}>Caterpillar</IonButton>
            </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
          <IonCardTitle>Bobcat</IonCardTitle>
          <IonCardSubtitle>(Male, Domestic Short-Hair)</IonCardSubtitle>           
          </IonCardHeader>
            <IonCardContent>
            Bobcat loves to explore and is as brave as he is curious.
             He loves to be around people and can be a little vocal when left behind.
              He enjoys playing and will come in for a quick snuggle before
               he is off on his next adventure. Bobcat would do well in any 
               home and gets along with both children and other animals.

            </IonCardContent>
            <IonCardContent>
            <IonModal isOpen={showModal2}>
              <IonImg src="https://media.discordapp.net/attachments/666476760803573792/704464745855582238/20200427_164109.jpg"></IonImg>
              <IonButton onClick={() => setShowModal2(false)}>Close</IonButton>
              </IonModal>
              <IonButton onClick={() => setShowModal2(true)}>Bobcat</IonButton>
            </IonCardContent>
        </IonCard>
        </IonContent>
        
    </IonPage>
  );
};

export default Tab2;
