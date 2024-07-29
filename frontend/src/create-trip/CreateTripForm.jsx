import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelesList } from "@/constants/options";
import { Button } from '@/components/ui/button';

function CreateTrip() {
  const [place, setPlace] = useState();
  const [days, setDays] = useState("");

  const handleDaysChange = (e) => {
    const value = Math.max(0, Math.min(365, Number(e.target.value)));
    setDays(value);
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences.
        <p className="mt-3 text-gray-500 text-xl">
          Just provide some basic information, and our trip planner will help you
          create your dream vacation!
        </p>
      </h2>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            🌍 What is your destination of choice?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              value: place,
              onChange: (v) => {
                setPlace(v);
                console.log(v);
              },
            }}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            📅 How many days is your trip?
          </h2>
          <Input
            placeholder={"Ex. 3"}
            type="number"
            min="0"
            max="365"
            value={days}
            onChange={handleDaysChange}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            💰 What is your budget?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                className="p-4 border cursor-pointer rounded-lg hover:shadow-lg"
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            👥 Who do you plan on traveling with on your next adventure?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelesList.map((item, index) => (
              <div
                key={index}
                className="p-4 border cursor-pointer rounded-lg hover:shadow-lg"
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-10 justify-end flex">
        <Button>Generate your dream vacation!</Button>
      </div>
    </div>
  );
}

export default CreateTrip;