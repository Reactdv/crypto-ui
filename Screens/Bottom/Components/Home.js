


import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,Image,ScrollView,StyleSheet, Text, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';


import { useEffect,useState,useLayoutEffect } from "react"

import { Ionicons,MaterialIcons,Entypo } from '@expo/vector-icons';

import tw from "twrnc"
import axios from "axios"
import { fetchTrendingCoins } from "../../../api/Api.js"





export const  Home =()=>{
  
const [trendingCoins,setTrendingCoins] = useState([])
  const [isNotify,setIsNotify] = useState(false)
  
  const getTrendingCoins =()=>{
axios.get(fetchTrendingCoins)
    .then((res)=>{
      return(
        
        setTrendingCoins(res.data),
        console.log(trendingCoins)
        
        )
    })
    .catch(er => alert(er))
  }
  
  useLayoutEffect(()=>{
    getTrendingCoins()
  },[trendingCoins])
  
  
 const handleNotify =()=> {
   setIsNotify(notify=> !notify)
 }
 
 const notif = 
 isNotify?"notifications-sharp":"notifications-outline"
 
 const notif2 = 
 isNotify?"notifications-active":"notifications-off"
 
 const notifTxt = 
 isNotify?"get notified when coins are moving":"notification is off"
 
  return (

<View style={container}> 
   <View>
   <LinearGradient
     colors={["#4776E6","#8E54E9"]}
     style={linearBg}
>
     <TouchableOpacity 
     style={notificationBell}
     onPress={handleNotify}>
    <Ionicons name={notif} size={30} color="white" />
    </TouchableOpacity>
    <Text style={balanceTxt}>
    Your Portfolio balance</Text>
    
    <Text style={balanceAmount}>
    $12,500.50</Text>
    
    <View style={tw`flex-row`}>
    <Text style={balanceStatus}>
    -2.5% </Text> 
    <Text style={[balanceStatus,tw`text-white`]}>
    in last 24hrs</Text> 
    </View>
    
   </LinearGradient>
   </View>
   <Text style={title}>Trending</Text>
   
   <View>
   <ScrollView
   horizontal={true}
   showsHorizontalScrollIndicator={false}
   style={tw`h-auto w-full px-5 pb-2.5`}>
     {trendingCoins.map((coin)=>{
      const coinDirection = coin.price_change_percentage_24h>0? "green":"red";
      
      return (
        
        <View style={trending} key={coin.id}>
           <View style={imgNameSymbolContainer}>
          <Image resizeMode="contain"
          source={coin.image}
          style={tw`w-[30px] h-[30px] rounded-full`}
          />
          <View style={nameSymbolContainer}>
          <Text>{coin.name}</Text>
          <Text style={symbolStyle}>{coin.symbol.toUpperCase()}</Text>
          </View>
          </View>
          
          <Text style={coinPriceStyle}>₱ {coin.current_price}</Text>
          <Text style={[coinStatusStyle,{color:coinDirection}]}>{coin.price_change_percentage_24h}</Text>
        
          
        </View>
        )
    })
     }
   </ScrollView>
   </View>
   
   <View style={notifyContainer}>
       <TouchableOpacity
        onPress={handleNotify}>
      <MaterialIcons name={notif2} size={24} color="yellow" />
      </TouchableOpacity>
      
       <View style={titleSubtitleContainer}>
       <Text style={title2}>Set Price Alert</Text>
       <Text style={subtitle}>
         {notifTxt}
       </Text>
       </View>
       <TouchableOpacity>
       <Entypo name="chevron-with-circle-right" size={24} color="black" />
        </TouchableOpacity>
   </View>
</View> 

   ) 
}



const container = tw`flex flex-auto`

const linearBg = tw`h-40 w-full rounded-b-[30px] items-center justify-center` 

const notificationBell = tw`absolute right-2.5 top-1`

const balanceTxt = tw`text-md text-white `

const balanceAmount = tw`text-xl text-white font-bold`

const balanceStatus = tw`text-xs text-red-500 font-light`

const title = tw`text-sm font-light text-white -mt-[50px] z-10 ml-2.5`

const trending = tw`w-37 h-30 rounded-lg shadow-2xl bg-white  mr-2.5`

const imgNameSymbolContainer = [tw`flex-row items-center justify-start mx-auto my-2.5`,{gap:5}]

const nameSymbolContainer = tw`flex-col items-center justify-center`

const symbolStyle = tw`text-xs font-light text-stone-400`

const coinPriceStyle = tw`text-md font-medium mx-auto mb-2`

const coinStatusStyle = tw`text-sm font-light mx-auto`

const title2 = tw`text-lg font-medium`
const subtitle = tw`text-sm font-light text-stone-400 `

const titleSubtitleContainer = tw`flex-col items-center justify-center`

const notifyContainer = tw`flex flex-row items-center justify-between shadow-xl bg-white p-2.5 m-2.5`