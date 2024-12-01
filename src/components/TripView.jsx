import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import InfoSelection from './InfoSelection';
import Hotel from './Hotel';
import PlacesToVisite from './PlacesToVisite';

const TripView = () => {
  const [tripData, setTripData] = useState({});
  const { id } = useParams();

  const fetchTripData = async () => {
    const docRef = doc(db, 'Aitrip', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      setTripData(docSnap.data());  // Set the data
    } else {
      console.log('No such document!');
    }
  };

  useEffect(() => {
    if (id) {
      fetchTripData();
    }
  }, [id]);


  return (
    <div>
      <InfoSelection trip={tripData} />
      <Hotel trip={tripData} />
      <PlacesToVisite trip={tripData} />
    </div>
  );
};

export default TripView;
