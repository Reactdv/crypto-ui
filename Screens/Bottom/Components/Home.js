


import { StatusBar } from 'expo-status-bar';
import { Modal,TouchableOpacity,Image,ScrollView,StyleSheet, Text, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';


import { useEffect,useState,useLayoutEffect } from "react"

import { Ionicons,MaterialIcons,Entypo } from '@expo/vector-icons';

import tw from "twrnc"
import axios from "axios"
import { fetchTrendingCoins,ohlc } from "../../../api/Api.js"
import {CoinDetails} from "./Components/CoinDetails.js"







const Coins =({direction,id,img,price,symbol,name,priceChange})=>{
  
const [isNavigate,setIsNavigate] = useState(false)
  const [chartData,setChartData] = useState([])
  
  
  const getHistoricalData = (id)=>{
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=php&from=1654203443&to=1654808243` 
    )
    .then((res)=>{
      return (
        setChartData(res.data.prices)
      
        
        )
    })
    .catch(er => alert(er))
    
  }
  
  useLayoutEffect(()=>{
    getHistoricalData(id)
    
   },[chartData])
  
  
  
 
  
  return (
    <View>
   <TouchableOpacity 
        onPress={()=>{
        setIsNavigate(toggled=> !toggled)
        }}
        style={trending} key={id}>
           
           <View style={imgNameSymbolContainer}>
          <Image resizeMode="contain"
          source={img}
          style={tw`w-[30px] h-[30px] rounded-full`}
          />
          <View style={nameSymbolContainer}>
          <Text>{name}</Text>
          <Text style={symbolStyle}>{symbol.toUpperCase()}</Text>
          </View>
          </View>
          
          <Text style={coinPriceStyle}>₱ {price.toLocaleString()}</Text>
          <Text style={[coinStatusStyle,{color:direction}]}>{priceChange.toFixed(2)}%</Text>
        
       
        </TouchableOpacity>
        <Modal 
        animationType="fade"
        visible={isNavigate}>
   
  <CoinDetails 
  
    chartData={chartData}
    priceChange={priceChange}
    id={id}
    name={name}
    symbol={symbol}
    direction={direction}
    price={price}
    img={img}
    setIsNavigate={setIsNavigate}
    isNavigate={isNavigate}/>
      
    
    
    </Modal>
      </View>
    )
}



export const  Home =({navigation})=>{
 
const [trendingCoins,setTrendingCoins] = useState([])
const [recentTrades,setRecentTrades] = useState([])
  const [isNotify,setIsNotify] = useState(false)
  const [news,setNews] = useState([])
  
  const getTrendingCoins =()=>{
axios.get(fetchTrendingCoins)
    .then((res)=>{
      return(
        
        setTrendingCoins(res.data)
       
        
        )
    })
    .catch(er => alert(er))
  }
  
  useLayoutEffect(()=>{
    getTrendingCoins()
  },[trendingCoins])
  
useEffect(()=>{
  
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://binance43.p.rapidapi.com/trades',
  params: {symbol: 'ETHBTC', limit: '20'},
  headers: {
    'X-RapidAPI-Key': 'fc1d0a119cmsh14dada74bd533f8p1ecab7jsn9e2a93c7dc5c',
    'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  
  
},[isNotify])

  useEffect(()=>{
    


const options = {
  method: 'GET',
  url: 'https://binance43.p.rapidapi.com/klines',
  params: {symbol: 'BTCUSDT', interval: '5m', limit: '100'},
  headers: {
    'X-RapidAPI-Key': 'fc1d0a119cmsh14dada74bd533f8p1ecab7jsn9e2a93c7dc5c',
    'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
    
    
  },[])
  
 useEffect(()=>{
   
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://binance43.p.rapidapi.com/ticker/bookTicker',
  headers: {
    'X-RapidAPI-Key': 'fc1d0a119cmsh14dada74bd533f8p1ecab7jsn9e2a93c7dc5c',
    'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
   
 },[])
 
 useLayoutEffect(()=>{


const options = {
  method: 'GET',
  url: 'https://cryptocurrency-news-live.p.rapidapi.com/crypto-news',
  headers: {
    'X-RapidAPI-Key': 'fc1d0a119cmsh14dada74bd533f8p1ecab7jsn9e2a93c7dc5c',
    'X-RapidAPI-Host': 'cryptocurrency-news-live.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
 setNews(response.data),
 
 console.log(news)
}).catch(function (error) {
	console.error(error);
});
   
 },[isNotify])
 
 useEffect(()=>{
   
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://binance43.p.rapidapi.com/ticker/price',
  headers: {
    'X-RapidAPI-Key': 'fc1d0a119cmsh14dada74bd533f8p1ecab7jsn9e2a93c7dc5c',
    'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
   
 },[isNotify])
 
 
  const slicedNews = news.slice(1,20)
  
  
  
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
       const {id,name,symbol,current_price,image,price_change_percentage_24h} = coin

      const coinDirection = price_change_percentage_24h>0? "green":"red";
      
      return (
        
        <Coins 
        
        direction={coinDirection}
        id={id} 
        img={image}
        name={name}
        symbol={symbol}
        price={current_price}
        priceChange={price_change_percentage_24h} 
        />
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
   
     
 
 {slicedNews.map((news,index)=>{
 
     return (
       
   <View 
   key={index}
   style={[shadowedContainer,tw`flex-col items-start`]}>
      
      
      
      
         <Text style={tw`italic text-lg font-medium`}> {news.title}</Text>
         <Text style={tw`italic text-stone-600 text-sm font-medium`}> source = {news.source}</Text>
  
      
       
       
       </View>
       )
   })}
      
     
 
   
</ScrollView>
</View> 
   ) 
}



const container = tw`flex-1`

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