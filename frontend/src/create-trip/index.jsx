import React from 'react'
import { GooglePlacesAutocomplete } from 'react-google-places-autocomplete'
function CreateTrip() {
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>
        Tell us your travel preferences.
        <p className='mt-3 text-gray-500 text-xl'>
          Just provide some basic information, and our trip planner
        </p>
      </h2>
      <div className='mt-20'>
        <div>
          <h2 className='text-xl my-3 font-medium'> What is destination of choice?
          </h2>
          <GooglePlacesAutocomplete
          apiKey={import.meta.env.GOOGLE_PLACES_KEY}
          
          />
        </div>

      </div>
    </div>
  )
}

export default CreateTrip
