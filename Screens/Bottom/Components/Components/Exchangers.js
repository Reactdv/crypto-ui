

import { useEffect,useState,useLayoutEffect } from "react"
import { StatusBar } from 'expo-status-bar';
import { ScrollView,TouchableOpacity,StyleSheet, Text, View } from 'react-native';

import { Ionicons,MaterialIcons,Entypo } from '@expo/vector-icons';

import axios from "axios"

import tw from "twrnc"
import Binance from 'binance-api-node'

const orderIds = [
  
  {id:"BTCUSDT"},
  {id:"ETHUSDT"},
  {id:"BTCUSDT"},
  {id:"USDCUSDT"},
  {id:"BNBUSDT"},
  {id:"ADAUSDT"},
  {id:"BUSDUSDT"},
  
  ]


const ids = orderIds.map(item=>item.id)



  export const  Exchangers =(props)=>{
    
   const { name,setToggleTheModal,id } = props
  
  
    const [ask,setAsk] = useState([])
    const [bid,setBid] = useState([])
    




// Authenticated client, can make signed calls


useLayoutEffect(()=>{
  getOrderBook()

},[bid])
  
const getOrderBook =()=>{
  
const options = {
  method: 'GET',
  url: 'https://binance43.p.rapidapi.com/depth',
  params: {symbol: "BTCUSDT", limit: '20'},
  headers: {
    'X-RapidAPI-Key': 'fc1d0a119cmsh14dada74bd533f8p1ecab7jsn9e2a93c7dc5c',
    'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
  }
};

axios.request(options)
.then((response)=>{
  setAsk(response.data.asks),
  setBid(response.data.bids)
  
	
})


.catch(function (error) {
	console.error(error);
});
  
}

 
  return (

<View style={container}> 

<View style={headerContainer}>
 <TouchableOpacity 
 onPress=
 {()=>setToggleTheModal(open=>!open)}
 >
<View style={iconBackContainer}>
   <Ionicons name="chevron-back-outline" size={24} color="black" />
    <Text style={tw`text-sm text-stone-600 `}>back</Text>
    </View>
 </TouchableOpacity>  
    
      <Text style={tw`text-lg font-medium`}>{name.toUpperCase()}</Text>
  
   <View style={ordersIconContainer}>
  <Ionicons name="newspaper-outline" size={24} color="black" />
      <Text>orders</Text>
      </View>
  </View>    
 
 <View  >
  <Text> Order Book </Text>
  <View style={tw`flex-row items-center justify-between mt-2.5`}>
  
  <View style={tw`flex-col items-center justify-center`}>
  <Text> Bid </Text>
   
 {bid.map((item,index)=>{
   return (
 
     <Text 
     key={index}
     style={tw`m-[5] text-green-500`}
     >
     {item[0]}
     </Text>
 )
 })}
 </View>
 
  <View style={tw`flex-col items-center justify-center`}>
  <Text>Ask </Text>
 {ask.map((item,index)=>{
   return (
      <View
     key={index}

      >
     <Text 
     style={tw`m-[5] text-red-500`}
     >
     {item[0]}
     </Text>
     
     
     </View>
    
    
 )
 })}
 </View>
 
 </View>
 </View>
 
    
</View> 

   ) 
}





  const container = tw`flex flex-auto p-2.5`    

 const headerContainer = tw`flex flex-row items-center justify-between`       
 
 const iconBackContainer = [tw`items-center justify-center flex flex-row`,{gap:5}]
 
 const ordersIconContainer = tw`flex-col items-center justify-center`
 