
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = 'Your API Key'
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
    export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location : New York, NY, USA, for 3 Days and 2 Night for A Couple with a Moderate budget with a Flight details , Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for 1 days and 1 night with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"travelPlan\": {\n    \"location\": \"New York, NY, USA\",\n    \"duration\": \"3 Days & 2 Nights\",\n    \"travelers\": \"Couple\",\n    \"budget\": \"Moderate\",\n    \"flight\": {\n      \"details\": \"Roundtrip flight from [Your Departure City] to New York City (JFK or LGA)\",\n      \"price\": \"$300-$500 (approx.)\",\n      \"bookingUrl\": \"https://www.google.com/flights\" \n    },\n    \"hotels\": [\n      {\n        \"hotelName\": \"The Jane Hotel\",\n        \"address\": \"113-115 Greenwich Street, New York, NY 10013\",\n        \"price\": \"$150-$250/night\",\n        \"imageUrl\": \"https://images.trvl-media.com/media/content/hotels/500/1045053.jpg\",\n        \"geoCoordinates\": [40.7154, -74.0086],\n        \"rating\": 4.5,\n        \"description\": \"A charming and historic hotel in the heart of Tribeca, offering affordable and unique accommodations.\"\n      },\n      {\n        \"hotelName\": \"The Bowery Hotel\",\n        \"address\": \"305 Bowery, New York, NY 10003\",\n        \"price\": \"$200-$350/night\",\n        \"imageUrl\": \"https://images.trvl-media.com/media/content/hotels/500/2609949.jpg\",\n        \"geoCoordinates\": [40.7200, -73.9973],\n        \"rating\": 4,\n        \"description\": \"A trendy boutique hotel with stylish rooms and a vibrant atmosphere in the Lower East Side.\"\n      },\n      {\n        \"hotelName\": \"The Roosevelt Hotel\",\n        \"address\": \"45 E 45th St, New York, NY 10017\",\n        \"price\": \"$250-$400/night\",\n        \"imageUrl\": \"https://images.trvl-media.com/media/content/hotels/500/1278663.jpg\",\n        \"geoCoordinates\": [40.7515, -73.9772],\n        \"rating\": 4.2,\n        \"description\": \"A classic and elegant hotel near Grand Central Station, known for its history and luxurious amenities.\"\n      }\n    ],\n    \"itinerary\": {\n      \"day1\": {\n        \"bestTime\": \"Morning\",\n        \"plan\": [\n          {\n            \"placeName\": \"Central Park\",\n            \"placeDetails\": \"Enjoy a stroll through the iconic park, visit the Bethesda Terrace, or take a rowboat on the lake.\",\n            \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Central_Park_West_at_72nd_Street_view_south.jpg/1280px-Central_Park_West_at_72nd_Street_view_south.jpg\",\n            \"geoCoordinates\": [40.7829, -73.9654],\n            \"ticketPricing\": \"Free\",\n            \"timeToTravel\": \"2-3 hours\"\n          },\n          {\n            \"placeName\": \"The Metropolitan Museum of Art\",\n            \"placeDetails\": \"Explore one of the world's finest art museums, featuring a vast collection spanning centuries.\",\n            \"placeImageUrl\": \"https://www.metmuseum.org/sites/default/files/images/met-exterior-01_0.jpg\",\n            \"geoCoordinates\": [40.7794, -73.9632],\n            \"ticketPricing\": \"Suggested donation: $25\",\n            \"timeToTravel\": \"2-3 hours\"\n          },\n          {\n            \"placeName\": \"Times Square\",\n            \"placeDetails\": \"Experience the dazzling lights and bustling energy of New York City's entertainment hub.\",\n            \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Times_Square_at_Night.jpg/1280px-Times_Square_at_Night.jpg\",\n            \"geoCoordinates\": [40.7580, -73.9855],\n            \"ticketPricing\": \"Free\",\n            \"timeToTravel\": \"1 hour\"\n          }\n        ]\n      },\n      \"day2\": {\n        \"bestTime\": \"Morning\",\n        \"plan\": [\n          {\n            \"placeName\": \"Statue of Liberty & Ellis Island\",\n            \"placeDetails\": \"Take a ferry to Liberty Island and visit the iconic Statue of Liberty. Explore Ellis Island and learn about its history as a gateway for immigrants.\",\n            \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Statue_of_Liberty_from_the_ferry_with_Ellis_Island_in_the_background.jpg/1280px-Statue_of_Liberty_from_the_ferry_with_Ellis_Island_in_the_background.jpg\",\n            \"geoCoordinates\": [40.6892, -74.0445],\n            \"ticketPricing\": \"$30-$40\",\n            \"timeToTravel\": \"4-5 hours\"\n          },\n          {\n            \"placeName\": \"Brooklyn Bridge\",\n            \"placeDetails\": \"Walk or bike across the iconic Brooklyn Bridge for stunning views of the Manhattan skyline and the East River.\",\n            \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Brooklyn_Bridge_at_night.jpg/1280px-Brooklyn_Bridge_at_night.jpg\",\n            \"geoCoordinates\": [40.7025, -73.9963],\n            \"ticketPricing\": \"Free\",\n            \"timeToTravel\": \"1-2 hours\"\n          },\n          {\n            \"placeName\": \"Dumbo, Brooklyn\",\n            \"placeDetails\": \"Explore this charming neighborhood with its cobblestone streets, art galleries, and waterfront views.\",\n            \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Dumbo_Manhattan_Bridge.jpg/1280px-Dumbo_Manhattan_Bridge.jpg\",\n            \"geoCoordinates\": [40.7022, -73.9902],\n            \"ticketPricing\": \"Free\",\n            \"timeToTravel\": \"1-2 hours\"\n          }\n        ]\n      },\n      \"day3\": {\n        \"bestTime\": \"Morning\",\n        \"plan\": [\n          {\n            \"placeName\": \"The High Line\",\n            \"placeDetails\": \"Take a stroll along this elevated park built on a former railway line, offering unique views of the city.\",\n            \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/The_High_Line_from_the_south.jpg/1280px-The_High_Line_from_the_south.jpg\",\n            \"geoCoordinates\": [40.7486, -74.0058],\n            \"ticketPricing\": \"Free\",\n            \"timeToTravel\": \"1-2 hours\"\n          },\n          {\n            \"placeName\": \"Chelsea Market\",\n            \"placeDetails\": \"Explore this vibrant food hall with a variety of vendors offering everything from gourmet food to artisan crafts.\",\n            \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Chelsea_Market_NY.jpg/1280px-Chelsea_Market_NY.jpg\",\n            \"geoCoordinates\": [40.7413, -74.0017],\n            \"ticketPricing\": \"Free\",\n            \"timeToTravel\": \"1-2 hours\"\n          },\n          {\n            \"placeName\": \"Little Italy & Chinatown\",\n            \"placeDetails\": \"Immerse yourselves in the vibrant cultures of these two neighborhoods, enjoying authentic food and exploring the markets.\",\n            \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Chinatown%2C_New_York_City.jpg/1280px-Chinatown%2C_New_York_City.jpg\",\n            \"geoCoordinates\": [40.7184, -73.9970],\n            \"ticketPricing\": \"Free\",\n            \"timeToTravel\": \"2-3 hours\"\n          }\n        ]\n      }\n    }\n  }\n}\n```\n\n**Please note:**\n\n* This is a sample itinerary and can be customized based on your preferences.\n* Flight prices are approximate and can vary depending on the time of year and booking date.\n* Hotel prices are also approximate and can fluctuate based on demand and availability.\n* Remember to check for any entry fees or reservation requirements for specific attractions. \n* Have a wonderful time in New York City! \n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  
  
 