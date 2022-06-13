
import ApexCharts from 'apexcharts'
import { useEffect,useState,useLayoutEffect } from "react"
import { StatusBar } from 'expo-status-bar';
import { ScrollView,Modal,Image,TouchableOpacity,StyleSheet, Text, View } from 'react-native';


import tw from "twrnc"

import { MaterialIcons,Entypo,Ionicons,FontAwesome } from '@expo/vector-icons';
import { Line } from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"

import axios from "axios"
import  { Exchangers } from "./Exchangers.js"

const LineChart =({id,symbol,chartData})=>{
  
  
  let delayed;
  
  return (
    
    <Line data={{
      labels:[
       "1:00",
       "2:00",
       "3:00",
       "4:00",
       "5:00",
       "6:00",
       "7:00",
       "8:00",
       "9:00",
       "10:00",
       "11:00",
       "12:00",
       
        ],
        datasets:[{
          label: symbol.toUpperCase(),
       data:chartData.map((item)=> item[1]),
          
        }]
      
    }}
     options={{
       tension:0.3,
       radius:2,
       responsive:true,
       pointBackgroundColor: "black",
      
       borderColor:"#2e2def",
animation: {
onComplete: () =>{
delayed = true;
},

delay: (context) => {
let delay = 0;
if (context.type === "data" && context.mode === "default" && !delayed) {
delay = context.dataIndex * 300+ context.datasetIndex * 100;
}
return delay;
},
},
       scales:{
         y:{
           ticks:{
             callback:(value)=> " ₱ " + value
           }
         }
       }
     }}/>
    )
}




export const  CoinDetails =(props)=>{
 const {chartData,setIsNavigate,id,img,name,price,priceChange,symbol,isNavigate}
 = props

const [toggleTheModal,setToggleTheModal] = useState(false)

const [recentTrades,setRecentTrades] = useState([])

useLayoutEffect(()=>{
  


const options = {
  method: 'GET',
  url: 'https://binance43.p.rapidapi.com/trades',
  params: {symbol: 'BTCUSDT', limit: '20'},
  headers: {
    'X-RapidAPI-Key': '07fa0fe881msh70683e595bdab4ap1359fejsne2f111d1de7c',
    'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	setRecentTrades(response.data);
}).catch(function (error) {
	console.error(error);
});
  
},[])

const renderModal =()=> 
setToggleTheModal(open => !open)
  
  
  const direction = priceChange >0? "green"
  :"red"
  
  return (

<View style={container}> 

    <View style={containerRow}>
         <TouchableOpacity 
         onPress={()=>{
           return (
           setIsNavigate(toggled=> !toggled)
         
           )
         }}
         
         style={[containerRow,tw`items-center justify-start`]}>
        <Ionicons name="chevron-back-outline" size={24} color="black" />
        
        <Text>  Back</Text>
        </TouchableOpacity>
        <FontAwesome name="star-o" size={24} color="yellow" />
  
    </View>
  <View style={chartContainer}>
     <View style={tw`shadow-lg mt-3 pt-2.5 px-4`}>
     <View style={tw`flex flex-row items-center justify-between`}>
     <View style={[tw`flex flex-row items-center justify-start`,{gap:8}]}>
   <Image resizeMode="contain"
   source={img}
   style={tw`w-[30px] h-[30px] rounded-full `}
   />
   <View style={tw`flex-col items-center justify-center`}>
   <Text style={tw`font-medium text-lg`}>{name}</Text>
   <Text style={tw`text-sm font-light text-stone-400`}>{symbol.toUpperCase()}</Text>
   </View>
   </View>
   
   <View style={tw`flex-col items-center justify-center`}>
   <Text>
  ₱ {price.toLocaleString()}</Text>
   <Text 
   style={{color:direction}}> {priceChange.toFixed(2)}%</Text>
   </View>
   </View>
    <View>
  
   <LineChart
     symbol={symbol} 
     id={id}
     chartData={chartData}/>  
 
   
     </View>
  <View style={[timeFrameContainer,{gap:10}]}>
        <Text style={[timeFrame,tw`text-white bg-indigo-700`]}>1hr</Text>
        <Text style={timeFrame}>3days</Text>
       <Text style={timeFrame}>1week</Text>
     
    
    </View>
    </View>
  <View>    
            <View style={tw`mt-4 pb-3 shadow-lg`}>
          <View style={tw`flex-row items-center justify-between  p-2.5 `}>
         <View style={imgNameSymbolContainer}>
        <Image resizeMode
        source={img}
style={tw`w-[30px] h-[30px] rounded-full `}
        />
        <View style={nameSymbolContainer}>
       <Text style={title}>{name} Wallet </Text>
       <Text style={subtitle}>{symbol.toUpperCase()}  </Text>
       </View>
       </View>
       
              <View style={priceIconChangeContainer}>
             <View style={priceAndChangeContainer}>
       <Text>
         ₱ 
       {price.toLocaleString()} </Text>
       <Text style={[tw`text-sm`,{color:direction}]}>{priceChange.toFixed(2)}%  </Text>
               </View>
  <Entypo name="chevron-with-circle-right" size={24} color="black" />
             </View>
    </View>
     <TouchableOpacity 
     onPress={renderModal}
     style={buyBtn}>
           <Text style={tw`text-lg text-white`}>  Buy </Text>
      </TouchableOpacity>
      <Modal 
      animationType="slide"
      transparent={false}
      visible={toggleTheModal}>
      
      <Exchangers 
      name={name}
      id={id}
      setToggleTheModal={setToggleTheModal}/>
      </Modal>
    
    </View>
    <View>
       <ScrollView 
        showsHorizontalScrollIndicator={false}
       style={tw`shadow-lg mt-2.5 h-[200px]`}>
       {recentTrades.map((item)=>{
       let date = item.time
       date = new Date(date * 1000)
       let hrs = date.getUTCHours().toString().padStart(2,0)
       let mins = date.getUTCMinutes().toString().padStart(2,0)
       let secs = date.getUTCSeconds().toString().padStart(2,0)
       
       const convertedTime = 
       `${hrs}:${mins}:${secs}`
       
        return (
          
          <View 
          style={tw`p-[3px] mb-2.5 shadow-lg`}
          key={item.id}>
             <Text style={tw`text-lg`}> Transactions</Text>
            <View style={tw`flex-row items-center justify-between`}>
            
            <View style={tw`flex-row items-center justify-center`}>
                <MaterialIcons name="compare-arrows" size={24} color="black" />
                <View>
               <Text>Amount {item.quoteQty}</Text>
               <Text>quote {item.qty}</Text>
               <Text style={tw`text-xs text-stone-500`}>Time {convertedTime}</Text>
               </View>
            </View>
            <View>
              <Text style={[tw`text-xs`,{color:direction}]}>Price {item.price}</Text>
            
            </View>
            
            
            </View>
       
          </View>
          )
         
       })}
       </ScrollView>
    </View>
    </View>
    </View>
  
</View> 

   ) 
}





const containerRow = tw`flex-row items-center justify-between px-2.5 pt-2.5`

const chartContainer = tw`flex flex-auto p-2.5 `

const container = tw`flex flex-auto`


const timeFrame = tw`mx-2.5 shadow-lg 
px-5  py-1.5 text-md font-medium rounded-lg `


const timeFrameContainer = tw`flex-row flex-auto items-center justify-around mb-3`

const imgNameSymbolContainer = [tw` flex-row items-center `,{gap:5}]

const nameSymbolContainer = tw`flex-col items-center justify-center`
const priceIconChangeContainer = tw`flex-row items-center justify-end`
const priceAndChangeContainer = tw`flex-col items-center justify-start`

const title = tw`text-md font-medium `
const subtitle = tw`text-sm font-light text-stone-400 `


const buyBtn = tw`flex items-center justify-center bg-green-500 mx-1.5 rounded-lg 
py-3`