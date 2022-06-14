

import * as DocumentPicker from 'expo-document-picker'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import tw from "twrnc"

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome5,FontAwesome,Fontisto  ,Ionicons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator()

import {Home} from "./Components/Home.js"
import {Portfolio} from "./Components/Portfolio.js"
import {Trade} from "./Components/Trade.js"
import {Prices} from "./Components/Prices.js"
import {Settings} from "./Components/Settings.js"

import { primary} from "../../globalStyles/colors.js"



export  const  BottomTabStack =({primary})=>{
  return (
    
 <Tab.Navigator
   labeled={false}
   barStyle={barStyle}
   activeColor= "#0c29dd"
   inactiveColor= "#bcbcbe"
 >

    <Tab.Screen  name="Home"
     component={Home}
     options={{
       
       tabBarIcon:({color})=>{
       return (
         <View style={labelContainer}>
           <FontAwesome5 name="home" 
           color={color}
           size={25} />
           <Text>Home</Text>
         </View>
         )
     }
     }}
    />
    
    <Tab.Screen  name="Portfolio"
     component={Portfolio}
     options={{
       
       tabBarIcon:({color})=>{
       return (
         <View style={labelContainer}>
           <Fontisto name="pie-chart-2" 
           color={color}
           size={25} />
           <Text>Portfolio</Text>
         </View>
         )
     }
     }}
    />
    
    <Tab.Screen  name="Trade"
     component={Trade}
      options={{
       
       tabBarIcon:({color})=>{
       return (
         <View style={labelContainer}>
           <FontAwesome name="exchange" 
           color="white"
           style={tradeStyle}
           size={25} />
           
         </View>
         )
     }
     }}
    />
    
    <Tab.Screen  name="Prices"
     component={Prices}
     options={{
       
       tabBarIcon:({color})=>{
       return (
         <View style={labelContainer}>
           <Fontisto name="line-chart" 
           color={color}
           size={25} />
           <Text>Prices</Text>
         </View>
         )
     }
     }}
    />
    
    <Tab.Screen  name="Settings"
     component={Settings}
      options={{
       
       tabBarIcon:({color})=>{
       return (
         <View style={labelContainer}>
         <Ionicons name="ios-settings" size={24} color="black" />
           
           <Text>Settings</Text>
         </View>
         )
     }
     }}
    />
    
</Tab.Navigator> 

   ) 
}


const barStyle = tw`bg-white font-bold  absolute mx-2.5 mb-2.5 drop-shadow-2xl rounded-lg h-[80px] p-[0px] z-50 `

const label = [tw`z-10 text-xl absolute `,{bottom: -30}]

const labelContainer = tw` items-center  flex w-[60px] h-[60px] pt-[15px] -mt-[20px] absolute z-10`

const labelIcon = tw`w-10 h-10`

const tradeStyle = tw`rounded-full bg-indigo-700 p-[10px] -mt-[5px] shadow-indigo-700 drop-shadow-2xl`

