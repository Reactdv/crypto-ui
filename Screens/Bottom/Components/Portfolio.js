

import {useState,useEffect,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import { Image,ScrollView,Dimensions,StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc'
import { LinearGradient } from 'expo-linear-gradient';
import {  Fontisto,MaterialCommunityIcons,FontAwesome,Ionicons,MaterialIcons,Entypo } from '@expo/vector-icons';
import axios from "axios"


const WIDTH = Dimensions.get("window").width

const HEIGHT = Dimensions.get("window").height



  export const  Portfolio =()=>{
 const [coins,setCoins] = useState([])

useEffect(()=>{
  
  getCoins()
  
  
})



const getCoins =()=>{
  
axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=200&page=1&sparkline=false")
    .then(res=> setCoins(res.data))
    .catch(err=> alert(err))
  
}

const mappedCoins = coins.map((item)=>{

 return (
  
  <View style={tw`flex-row items-center justify-between mb-5 `}> 
      <View style={tw`flex-row items-center justify-center `}>
     <Image resizeMode="contain"
      source={item.image}
      style={tw`w-[30px] h-[30px] rounded-full`}/>
      <View style={tw`ml-2.5 flex-col items-center justify-center`}>
     <Text style={tw`text-lg font-medium`}>{item.name}</Text>
     <Text style={tw`text-sm font-light text-stone-400`}>{item.symbol.toUpperCase()}</Text>
     </View>
     </View>
     
     <View style={tw`items-center justify-center`}>
     <Text> 
      ₱
     {item.current_price.toLocaleString()}</Text>
   
     <Text style={tw`text-sm font-light`,{color:item.price_change_percentage_24h >0? "green" : "red"}}>
     {item.price_change_percentage_24h.toFixed(2)}</Text>
      </View> 
  </View> 
   
   
   )
  
})

  
  
  
  return (

  <View>
   <LinearGradient
     colors={["#4776E6","#8E54E9"]}
     style={linearBg}>
     
    <View style={balanceContainer}>
    
      <Text>My balance</Text>
     
      <View style={tw`flex-row items-center justify-between mt-[10px]`}>
      
      <View style={tw`flex-col items-center justify-center`}>
      <Text style={tw`text-lg font-medium `}>$12,500.50</Text>
      <Text style={tw`text-sm text-red-500`}> -2.5% </Text>
      </View>
      
      <Text style={tw`text-stone-300 text-sm`}> my assets </Text>
      </View>
    
      <View style={tw`flex-row items-center justify-between mt-2.5`}>
      <View>
      <Text style={tw`text-xs font-light text-stone-500`}>total P/L  </Text>
      <Text style={tw`text-xs font-light text-red-500`}>-5.03% </Text>
       </View>
      
      <View>
      <Text style={tw`text-xs font-light text-stone-500`}>margin  </Text>
      <Text style={tw`text-xs font-light text-red-500`}>-80% </Text>
       </View>
       
      <View>
      <Text style={tw`text-xs font-light text-stone-500`}>margin-used </Text>
      <Text style={tw`text-xs font-light text-green-500`}>$600 </Text>
      </View>
      
      </View>
      
   </View>
 
    
   </LinearGradient>
   <View
    style={tw` w-[290px] flex-row items-center justify-between bg-white shadow-lg rounded-lg  mx-auto mt-[95px]  p-2.5 pt-[15px]`}>
    
     <View style={tw`flex-col items-center justify-between`}>
    <FontAwesome name="send" size={24} color="green" />
    <Text>Send</Text>
    </View>
    
    <View style={tw` flex-col items-center justify-center`}>
    <FontAwesome name="money" size={24} color="green" />
    <Text>Receive </Text>
    </View>
    
    <View style={tw`-mr-[80px] flex-col items-center justify-center `}>
    <Fontisto name="history" size={24} color="green" />
    <Text> History </Text>
    </View>
    <View>
    </View>
    
   </View>
    <Text style={tw`left-10 top-72 absolute text-lg font-medium`}>My holdings</Text>
   <ScrollView 
    showsVerticalScrollIndicator={false}
   style={tw`mx-5 p-2.5 h-[220px] mt-[50px] bg-white`}>
       
       {mappedCoins}
   </ScrollView>

   </View>
    
   ) 
}





      
const linearBg = tw`h-30 w-full rounded-b-[30px] items-center justify-center` 

const balanceContainer = tw`bg-white shadow-lg rounded-lg w-[290px] h-[150px] 
mt-[95px] p-2.5 pt-[15px] `