

import {useState,useEffect,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import { Dimensions,ScrollView,Modal,FlatList,Image,TouchableOpacity,StyleSheet, Text, View } from 'react-native';

import tw from "twrnc"

import axios from "axios"






export const CoinPicker =({setIsModalVisible,setData2,setData,setIsModalVisible2})=>{
  
  const [coins,setCoins] = useState([])
  
 
const getCoins =()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=50&page=1&sparkline=false")
    .then(res=> setCoins(res.data))
    .catch(err=> alert(err))
    
  }
  
  useLayoutEffect(()=>{
    getCoins()
  },[coins])
  
  const onPressItem =(name,image,symbol)=>{
    
    setIsModalVisible(false)
    setData(name,image,symbol)
   
    
  }
  
  const onPressItem2 =(name,image,symbol)=>{
    
    setIsModalVisible2(false)
  
    setData2(name,image,symbol)
    
  }
  
  const mappedCoins = coins.map((coin)=>{
    const {id,symbol,name,current_price,image} = coin
    
    
    return (
      
      <TouchableOpacity
       onPress={()=> {
         return (
       onPressItem(name,image,symbol)||
       onPressItem2(name,image,symbol)
       
        
         )
       }}
       key={id}>
        <Text style={tw`text-lg mx-2.5  my-[15px]`}>{name}</Text>
      </TouchableOpacity>
      
      
  
      
      )
  })
  
  
  return (

<TouchableOpacity
onPress={()=>{
  return (
  setIsModalVisible(show=> !show) ||
  setIsModalVisible2(show=> !show)
  )
}}
style={tw` mt-[165px] mx-2.5  h-[200px] bg-white`}> 
 
 
   <View>
     <ScrollView 
     style={tw`h-[200px]`}
      showsHorizontalScrollIndicator={false}
     >
     {mappedCoins}
     
     </ScrollView>
   
   </View>
  
    
</TouchableOpacity> 

   ) 
}



