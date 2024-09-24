import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import moment from 'moment'
import FlightInfo from '../../components/TripDetails/FlightInfo';
import HotelList from '../../components/TripDetails/HotelList';
import PlannedTrip from '../../components/TripDetails/PlannedTrip';
export default function TripDetails() {

    const navigation=useNavigation();
    const {trip}=useLocalSearchParams();
    const [tripDetails,setTripDetails]=useState(JSON.parse(trip));

    const formatData=(data)=>{
        return data&&JSON.parse(data);
    }
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        });

        trip&&setTripDetails(JSON.parse(trip))
    },[trip])

  return tripDetails&&(
    <ScrollView>
         <Image source={{uri:
        'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
        +formatData(tripDetails?.tripData).locationInfo?.photoRef
        +'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
        style={{
            width:'100%',
                height:330,
                
        }}
        />
        <View style={{
            padding:15,
            backgroundColor:Colors.WHITE,
            height:'100%',
            marginTop:-30,
            borderTopLeftRadius:30,
            borderTopRightRadius:30
        }}>
            <Text style={{
                fontSize:25,
                fontFamily:'outfit-bold'
            }}>{tripDetails?.tripPlan.travelPlan.location}</Text>
           <View style={{
            display:'flex',
            flexDirection:'row',
            gap:5,
            marginTop:5
           }}>
             <Text style={{
                fontFamily:'outfit',
                fontSize:18,
                color:Colors.GRAY
            }}>{moment(formatData(tripDetails.tripData).startDate).format('DD MMM yyyy')}</Text>
              <Text style={{
                fontFamily:'outfit',
                fontSize:18,
                color:Colors.GRAY
            }}> {moment(formatData(tripDetails.tripData)?.endDate).format('DD MMM yyyy')}</Text>
         </View>
         <Text style={{
                fontFamily:'outfit',
                fontSize:17,
                color:Colors.GRAY
            }}>🚌 {formatData(tripDetails.tripData)?.traveler?.title}</Text>
        
        
        {/* Flight Info  */}
      
        <FlightInfo flightData={tripDetails?.tripPlan?.travelPlan?.flight} />
        {/* Hotels List  */}
        <HotelList hotelList={tripDetails?.tripPlan?.travelPlan?.hotels} />
        {/* Trip Day Planner Info */}
        <PlannedTrip details={tripDetails?.tripPlan?.travelPlan?.itinerary} />
        </View>
{/* 
            <View>

            </View> */}

    </ScrollView>
  )
}