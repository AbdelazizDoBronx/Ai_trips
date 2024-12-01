import React, { useState } from 'react';
import { chatSession } from './AiModel';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { db } from './firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const TripForm = () => {
  const [formdata, setFormdata] = useState({});
  const [selectedBudget, setSelectedBudget] = useState(null); // Track selected budget option
  const [selectedTravel, setSelectedTravel] = useState(null); // Track selected travel option
  const [loading, setLoading] = useState(false); // Track loading state
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  // Handle form input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormdata(prevData => ({ ...prevData, [name]: value }));
  }

  // Google login handler
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => getUser(codeResponse),
  });

  // Get user data from Google API after successful login
  const getUser = async (tokenInfo) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: 'application/json',
          },
        }
      );
      localStorage.setItem('user', JSON.stringify(response.data));
      document.getElementById('my_modal_1').close();
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Handle the trip plan submission
  function handleSubmit() {
    const Prompt = `Generate real Travel data Plan for Location: ${formdata?.destination}, 
    for ${formdata?.days} Days for ${formdata?.travel} with a ${formdata?.budget} budget, 
    Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, 
    rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, 
    Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days 
    with each day plan with best time to visit in JSON format.`;
    
    console.log(Prompt);
    setLoading(true); // Show loading spinner while waiting for API response
    AiCall(Prompt);
    if (!user) {
      document.getElementById('my_modal_1').showModal();
    }
  }

  // Call AI for trip generation
  const AiCall = async (Prompt) => {
    try {
      const result = await chatSession.sendMessage(Prompt);
      console.log(result.response.text());
      saveTrip(result.response.text());
    } catch (error) {
      console.error('Error calling AI model:', error);
    } finally {
      setLoading(false); // Hide loading spinner after the API call
    }
  };

  const saveTrip = async (TripData) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const docId = Date.now().toString();
    // Add a new document in collection "cities"
    await setDoc(doc(db, "Aitrip", docId), {
      userSelection : formdata,
      data : JSON.parse(TripData),
      userEmail : user?.email,
      id : docId
  });
    navigate(`/trip-view/${docId}`)
  }
  return (
    <div className="container flex flex-col gap-y-1 mx-auto mt-16 px-4 py-6 bg-white shadow-lg rounded-lg min-h-screen">
      <div>
        <h2 className="text-3xl font-bold my-4 text-neutral-600">Tell us your travel preferences 🏕️🌴</h2>
        <p className="my-3 text-neutral-500">Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>
      </div>

      {/* Destination Section */}
      <div className="destination my-6 w-full">
        <h3 className="text-xl font-semibold text-neutral-700">What is your destination of choice?</h3>
        <input
          onChange={(e) => handleChange(e)}
          name="destination"
          type="text"
          placeholder="e.g., Las Vegas"
          className="input input-bordered w-full mt-2 p-5 rounded-lg border-neutral-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Days Section */}
      <div className="days my-6 w-full">
        <h3 className="text-xl font-semibold text-neutral-700">How many days are you planning your trip?</h3>
        <input
          onChange={(e) => handleChange(e)}
          name="days"
          max={21}
          min={1}
          type="number"
          placeholder="Example: 3"
          className="input input-bordered w-full mt-2 p-5 rounded-lg border-neutral-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Budget Section */}
      <div className="budget my-6">
        <h3 className="text-xl font-semibold text-neutral-700">What is your budget?</h3>
        <div className="flex justify-start gap-4 items-center my-4">
          {['cheap', 'moderate', 'luxury'].map((budget) => (
            <div
              key={budget}
              onClick={() => {
                setFormdata((prevData) => ({ ...prevData, budget }));
                setSelectedBudget(budget);
              }}
              className={`cursor-pointer border shadow-md flex-grow p-3 rounded-md text-center ${selectedBudget === budget ? 'bg-blue-500 text-white' : 'border-neutral-500'}`}
            >
              <h1 className="text-3xl">{budget === 'cheap' ? '💵' : budget === 'moderate' ? '💰' : '💸'}</h1>
              <h2 className="font-semibold">{budget.charAt(0).toUpperCase() + budget.slice(1)}</h2>
              <p className="text-neutral-500">{budget === 'cheap' ? 'Stay conscious of costs' : budget === 'moderate' ? 'Keep cost on the average side' : 'Don\'t worry about cost'}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Section */}
      <div className="travel my-6">
        <h3 className="text-xl font-semibold text-neutral-700">Who do you plan on traveling with on your next adventure?</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          {['solo', 'couple', 'family', 'friends'].map((travelType) => (
            <div
              key={travelType}
              onClick={() => {
                setFormdata((prevData) => ({ ...prevData, travel: travelType }));
                setSelectedTravel(travelType);
              }}
              className={`cursor-pointer border shadow-md p-3 rounded-md text-center ${selectedTravel === travelType ? 'bg-blue-500 text-white' : 'border-neutral-500'}`}
            >
              <h1 className="text-3xl">{travelType === 'solo' ? '✈️' : travelType === 'couple' ? '🥂' : travelType === 'family' ? '🏡' : '🚢'}</h1>
              <h2 className="font-semibold">{travelType.charAt(0).toUpperCase() + travelType.slice(1)}</h2>
              <p className="text-neutral-500">
                {travelType === 'solo' ? 'A sole traveler in exploration' : travelType === 'couple' ? 'Two travelers in tandem' : travelType === 'family' ? 'A group of fun-loving adventurers' : 'A bunch of thrill-seekers'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex-grow flex justify-end mt-auto">
        <button
          onClick={handleSubmit}
          className="btn btn-neutral shadow-md py-2 mt-6 text-white bg-neutral-800 hover:bg-neutral-900 rounded-lg w-1/3"
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Generating Trip...' : 'Generate Trip'}
        </button>
      </div>

      {/* Modal for Google login */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <img src="/logo.svg" alt="Logo" />
          <p className="py-4 text-lg font-semibold">You Need To Sign in with Google To Continue</p>
          <button
            className="w-full btn btn-neutral"
            onClick={login}
          >
            Connect with Google account
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default TripForm;
