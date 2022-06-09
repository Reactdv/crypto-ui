


import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,Image,ScrollView,StyleSheet, Text, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';


import { useEffect,useState,useLayoutEffect } from "react"

import { Ionicons,MaterialIcons,Entypo } from '@expo/vector-icons';

import tw from "twrnc"
import axios from "axios"
import { fetchTrendingCoins } from "../../../api/Api.js"





export const  Home =({navigation})=>{
  
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
  
  const goToTrade =()=>{
    navigation.navigate("Trade")
  }
  
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
  <ScrollView style={tw`h-[5000px] pb-96`}>  
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
        
        <TouchableOpacity 
        onPress={goToTrade}
        style={trending} key={coin.id}>
           
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
          
          <Text style={coinPriceStyle}>₱ {coin.current_price.toLocaleString()}</Text>
          <Text style={[coinStatusStyle,{color:coinDirection}]}>{coin.price_change_percentage_24h}</Text>
        
       
        </TouchableOpacity>
        )
    })
     }
   </ScrollView>
   </View>
   
   <View style={shadowedContainer}>
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
   <View style={[shadowedContainer,tw`flex-col items-start bg-indigo-700`]}>
   <Text style={[title2,tw`text-white`]}>Investing safety </Text>
   <Text style={txtContent}>it's very difficult to time an investment, especially when the market is volatile learn how to use dollar cost averaging to your advantage
   </Text>
   <Text style={learnMoreStyle}>Learn more </Text>
   </View>
    <View style={[shadowedContainer,tw`flex-col items-start `]}>
     
     <Text style={title2}>Transaction history </Text>
      
     <View style={[contentContainerRow,tw`w-full justify-between`]}>
      <View style={[contentContainerRow,{gap:5}]}>
     <MaterialIcons name="compare-arrows" size={24} color="black" />
     <View style={contentContainerCol}>
     <Text style={[title2,tw`text-md`]}>Sold Etherium </Text>
     <Text style={subtitle}>14:20 12 Apr</Text>
      </View>
      </View>
      
     <View style={[contentContainerRow,{gap:5}]}>
     <Text style={title2}>2.0034 eth</Text>
     <Entypo name="chevron-with-circle-right" size={24} color="black" />
     </View>
     </View>
     
   </View>
   
    <View style={[shadowedContainer,tw`flex-col items-start `]}>
     
     <Text style={title2}>Transaction history </Text>
      
     <View style={[contentContainerRow,tw`w-full justify-between`]}>
      <View style={[contentContainerRow,{gap:5}]}>
     <MaterialIcons name="compare-arrows" size={24} color="black" />
     <View style={contentContainerCol}>
     <Text style={[title2,tw`text-md`]}>Sold Etherium </Text>
     <Text style={subtitle}>14:20 12 Apr</Text>
      </View>
      </View>
      
     <View style={[contentContainerRow,{gap:5}]}>
     <Text style={title2}>2.0034 eth</Text>
     <Entypo name="chevron-with-circle-right" size={24} color="black" />
     </View>
     </View>
     
   </View>
   
   <View style={[shadowedContainer,tw`flex-col items-start `]}>
     
     <Text style={title2}>Transaction history </Text>
      
     <View style={[contentContainerRow,tw`w-full justify-between`]}>
      <View style={[contentContainerRow,{gap:5}]}>
     <MaterialIcons name="compare-arrows" size={24} color="black" />
     <View style={contentContainerCol}>
     <Text style={[title2,tw`text-md`]}>Sold Etherium </Text>
     <Text style={subtitle}>14:20 12 Apr</Text>
      </View>
      </View>
      
     <View style={[contentContainerRow,{gap:5}]}>
     <Text style={title2}>2.0034 eth</Text>
     <Entypo name="chevron-with-circle-right" size={24} color="black" />
     </View>
     </View>
     
   </View>
   
</ScrollView>
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

const trending = tw`w-37 h-30 rounded-lg shadow-2xl bg-white  mr-2.5 transition duration-500 ease`

const imgNameSymbolContainer = [tw`flex-row items-center justify-start mx-auto my-2.5`,{gap:5}]

const nameSymbolContainer = tw`flex-col items-center justify-center`

const symbolStyle = tw`text-xs font-light text-stone-400`

const coinPriceStyle = tw`text-md font-medium mx-auto mb-2`

const coinStatusStyle = tw`text-sm font-light mx-auto`

const title2 = tw`text-lg font-medium`
const subtitle = tw`text-sm font-light text-stone-400 `

const titleSubtitleContainer = tw`flex-col items-center justify-center`

const shadowedContainer = tw`flex flex-row items-center justify-between shadow-xl bg-white p-2.5 m-2.5`

const txtContent = tw`text-white`

const learnMoreStyle = tw`text-cyan-400 underline`

const contentContainerRow = tw`items-center  flex-row `
const contentContainerCol = tw`flex-col `