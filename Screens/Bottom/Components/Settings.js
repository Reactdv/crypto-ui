

import UserAvatar from 'react-native-user-avatar';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from "@rneui/themed";
import React, { useState } from 'react';
import { Ionicons,MaterialIcons,MaterialCommunityIcons,FontAwesome,Fontisto,AntDesign } from '@expo/vector-icons';

import tw from "twrnc"
import {STYLES} from "../../../globalStyles/Styles.js"

const {SUBTITLE,TITLE,primaryBg,lightness}=
STYLES


const Data = [
  
  { 
    id :1,
    color: "orange",
    title: "Points store",
    subtitle: "points for coupon and iphone",
    icon :   <FontAwesome name="shopping-bag" size={24} color="white" />
  },
  
  { 
    id:2,
    color:"indigo",
    title: "Leverage adjustment",
    subtitle: "choose the one that suits you best" ,
    icon :<MaterialCommunityIcons name="weight-lifter" size={24} color="white" />
    
  },
  
  { 
    id:3,
    color:"green",
    title: "Interest on balance",
    subtitle: "upto 6% /YR",
    icon :<MaterialIcons name="calculate" size={24} color="white" />
  },
  
  { 
    id:4,
    color:"purple",
    title: "Invite friends",
    subtitle: "get a $5 coupon for every invite",
    icon :<Ionicons name="md-people" size={24} color="white" />
   
  },
  
  
  ]

export const Settings =()=>{
  
  

  return (

<View> 

  <View style={tw`flex-row items-center justify-start mx-5 shadow-lg p-2.5 my-[15px] `}>
  
      <View style={tw`flex-row items-center justify-center w-[50px] h-[50px] rounded-full bg-orange-500`}>
        <Text style={tw`text-white font-bold text-lg`}>JL</Text> 
      </View>
      
     <View style={tw`ml-2.5 flex-col items-center justify-center `}>
     <Text style={tw`text-lg font-medium`}>Lorem ipsum </Text>
     <Text style={tw`text-sm font-medium text-stone-400`}>Creator pro </Text>
     </View>
     
     <AntDesign 
      style={tw`ml-auto`}
     name="pluscircle" size={30} color="blue" />
     
  </View>
  
  
  <View style={tw`mx-5 flex-row items-center justify-between`}>
 
  <View style={tw`flex-col items-center justify-center shadow-lg p-[15px]`}>

     <AntDesign name="customerservice" size={28} style={tw`text-violet-600`} />
     <Text style={tw`text-md`}>Customer service</Text>
  </View>
  
  <View style={tw`flex-col items-center justify-center shadow-lg px-[30px] py-[15px]`}>
     <Fontisto name="ticket-alt" size={28} style={tw`text-indigo-700`}/>
     <Text>My coupon </Text>
  </View>
  </View>
  
  {Data.map((item)=>{
    const {subtitleStyle,color,id,title,subtitle,icon} = item
  
    return(
      
 <View 
 key={id}
 style={tw`flex-row items-center justify-start mx-5 shadow-lg p-2.5 my-[15px] `}>
     
     <View style={tw`bg-${color}-600 flex-row items-center justify-center w-[40px] h-[40px] rounded-full`}>
      {icon}
     </View>
     <View style={tw`ml-2.5 flex-col items-start justify-center`}>
     <Text style={tw`text-md `}>{title} </Text>
     <Text 
     style={SUBTITLE}>{subtitle} </Text>
     </View>
  
  </View>
    
      
      )
    
  })}


    
 
    
</View> 

   ) 
}



