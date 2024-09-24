import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { GetPhotoRef } from '../../services/GooglePlaceApi';

export default function PlaceCard({place}) {
    const [photoRef,setPhotoRef]=useState();
    useEffect(()=>{
        GetGooglePhotoRef();
    },[])
    
    const GetGooglePhotoRef=async()=>{
        const result= await GetPhotoRef(place.placeName);
        setPhotoRef(result);
       }
  return (
    <View style={{
                     
        backgroundColor:Colors.LIGHT_BLUE,
       padding:10,
       borderRadius:15,
       borderColor:Colors.GRAY,
       marginTop:20
   }}>
       <Image source={{uri:
        'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
        +photoRef
        +'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
           style={{
               width:'100%',
               height:140,
               borderRadius:15
           }}
       />
       <View style={{
           marginTop:5
       }}>
       <Text style={{
           fontFamily:'outfit-bold',
           fontSize:20
       }}>{place?.placeName}</Text>
       <Text style={{
           fontFamily:'outfit',
           fontSize:14,
           color:Colors.GRAY
       }}>{place.placeDetails}</Text>
       <View style={{
           display:'flex',
           flexDirection:'row',
           alignItems:'center',
           justifyContent:'space-between'
       }}>
       <View>
           <Text style={{
               fontFamily:'outfit',
               fontSize:17,marginTop:5
           }}>🎟️ Ticket Price: 
           <Text style={{
               fontFamily:'outfit-bold'
           }}> {place?.ticketPricing}</Text></Text>
               <Text style={{
               fontFamily:'outfit',
               fontSize:17,marginTop:5
           }}>⏱️ Time to Travel:  <Text style={{
               fontFamily:'outfit-bold'
           }}>{place?.timeToTravel}</Text></Text>
       </View>
           <TouchableOpacity style={{
               backgroundColor:Colors.PRIMARY,
               padding:8,
               borderRadius:7
           }}>
               <Ionicons name="navigate" size={20} color="white" />
           </TouchableOpacity>
       </View>
       </View>
   </View>
  )
}