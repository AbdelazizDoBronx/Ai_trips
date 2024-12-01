import { GoogleGenerativeAI } from "@google/generative-ai";

  
  const apiKey = 'AIzaSyCfm2PQYxzsvPMpgLtbpZri1NmCV5fvtQk';
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate real Travel data Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"tripDetails\": {\n    \"location\": \"Las Vegas, Nevada\",\n    \"duration\": \"3 Days\",\n    \"travelers\": \"Couple\",\n    \"budget\": \"Cheap\"\n  },\n  \"hotels\": [\n    {\n      \"hotelName\": \"Excalibur Hotel & Casino\",\n      \"hotelAddress\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"60-100\", \n      \"hotelImageUrl\": \"https://www.excalibur.com/images/default-source/default-album/exp-hero.jpg?sfvrsn=fa989420_2\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.0994,\n        \"longitude\": -115.171\n      },\n      \"rating\": 3.5,\n      \"description\": \"Medieval-themed resort with affordable rooms, various dining options, and entertainment shows.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"50-90\",\n      \"hotelImageUrl\": \"https://static.www.circusevents.com/wp-content/uploads/2020/07/CC-Midway-800x550-1.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1231,\n        \"longitude\": -115.167\n      },\n      \"rating\": 3.0,\n      \"description\": \"Family-friendly hotel with a circus theme, free circus acts, Adventuredome theme park, and affordable rooms.\"\n    },\n     {\n      \"hotelName\": \"The LINQ Hotel + Experience\",\n      \"hotelAddress\": \"3535 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"70-120\", \n      \"hotelImageUrl\": \"https://www.caesars.com/content/dam/linq/Property/Hotel/LINQ_Exterior_Strip_01_Night_5500x2500.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1175,\n        \"longitude\": -115.1718\n      },\n      \"rating\": 4.0,\n      \"description\": \"Modern hotel with a lively atmosphere, High Roller observation wheel, various dining and entertainment options.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"bestTimeToVisit\": \"Afternoon - Evening\",\n      \"plan\": [\n        {\n          \"placeName\": \"Welcome to Fabulous Las Vegas Sign\",\n          \"placeDetails\": \"Iconic welcome sign for photo opportunities.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/content/dam/visitlasvegas/media/partner-content/general-partner-content/general/welcome-sign/welcome-sign-night-02.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.086,\n            \"longitude\": -115.166\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"1-2 hours\"\n        },\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Pedestrian mall with light shows, live music, and street performers.\",\n          \"placeImageUrl\": \"https://vegasexperience.com/wp-content/uploads/2023/03/Viva-Vision-03-SlotZilla-Fremont-Street-Experience-Viva-Vision-Light-Show-scaled.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1704,\n            \"longitude\": -115.142\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"timeTravel\": \"2-3 hours\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"bestTimeToVisit\": \"Daytime\",\n      \"plan\": [\n         {\n          \"placeName\": \"High Roller Observation Wheel\",\n          \"placeDetails\": \"Giant Ferris wheel with panoramic views of the city.\",\n          \"placeImageUrl\": \"https://www.caesars.com/content/dam/linq/Things-To-Do/Attractions/High-Roller/LINQ_High-Roller_Exterior_Day_5500x2500.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1175,\n            \"longitude\": -115.1719\n          },\n          \"ticketPricing\": \"25-35\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"1-2 hours\"\n        },\n        {\n          \"placeName\": \"The Strip Exploration\",\n          \"placeDetails\": \"Walk along Las Vegas Boulevard, exploring themed hotels and attractions.\",\n          \"placeImageUrl\": \"https://cdn.britannica.com/49/195349-050-219D3882/Las-Vegas-Strip.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.11,\n            \"longitude\": -115.17\n          },\n          \"ticketPricing\": \"Free (except for attractions inside hotels)\",\n          \"rating\": 4.0,\n          \"timeTravel\": \"Flexible, depending on interest\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"bestTimeToVisit\": \"Anytime\",\n      \"plan\": [\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"Stunning seasonal floral displays.\",\n          \"placeImageUrl\": \"https://www.bellagio.com/content/dam/bellagio/Hotel/Activities/Conservatory-Botanical-Garden/BLG_Conservatory_ChineseNewYear_DSC09192_2560x1600.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.113,\n            \"longitude\": -115.176\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"1-2 hours\"\n        },\n        {\n          \"placeName\": \"Fountains of Bellagio\",\n          \"placeDetails\": \"Choreographed water, music, and light show.\",\n          \"placeImageUrl\": \"https://www.bellagio.com/content/dam/bellagio/Hotel/Activities/Fountains-of-Bellagio/BLG_Fountains_Daytime_2560x1600.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.113,\n            \"longitude\": -115.176\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"30-60 minutes\"\n        }\n      ]\n    }\n  }\n}\n```"},
          ],
        },
      ],
    });
  