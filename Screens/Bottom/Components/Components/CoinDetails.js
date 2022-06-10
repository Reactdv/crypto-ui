
import ApexCharts from 'apexcharts'
import { useEffect,useState,useLayoutEffect } from "react"
import { StatusBar } from 'expo-status-bar';
import { Image,TouchableOpacity,StyleSheet, Text, View } from 'react-native';


import tw from "twrnc"

import { Ionicons,FontAwesome } from '@expo/vector-icons';
import { Line } from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"

import axios from "axios"


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
 const {chartData,setIsNavigate,id,img,name,price,priceChange,direction,symbol,isNavigate}
 = props


  
  
  
 
  
  
  
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
     <View style={tw`shadow-xl mt-3 pt-2.5 px-4`}>
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
   style={{color:priceChange>0? "green" : "red"}}> {priceChange}%</Text>
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