

import { useEffect,useState,useLayoutEffect } from "react"
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,StyleSheet, Text, View } from 'react-native';

import { Ionicons,MaterialIcons,Entypo } from '@expo/vector-icons';

import axios from "axios"

import tw from "twrnc"



  export const  Exchangers =(props)=>{
    
    const { setToggleTheModal } = props
    const [orderBook,setOrderBook] = useState()
    

    
  return (

<View style={container}> 

 <TouchableOpacity 
 onPress=
 {()=>setToggleTheModal(open=>!open)}
 >
   <Ionicons name="chevron-back-outline" size={24} color="black" />
 
 </TouchableOpacity>  
    
</View> 

   ) 
}





  const container = tw`flex flex-auto p-2.5`    

        