


import { TextInput,TouchableOpacity,StyleSheet, Text, View } from 'react-native';

import { useState,useLayoutEffect } from "react"
 
import tw from "twrnc"
import axios from "axios"
import { orderbook } from "../../../api/Api.js"

import { AntDesign,MaterialIcons } from '@expo/vector-icons';



const CustomSwitch =({singleAsk,singleBid})=>{
  


  const [isBuyBtn,setIsBuyBtn] = useState(false)
  const [isSellBtn,setIsSellBtn] = useState(true)
  const [isRotate,setIsRotate] = useState(false)
  const [isColorChange,setIsColorChange] = 
  useState(false)
  
 
  
  const BuyBtnPress = () => { 
    setIsBuyBtn(prev=>!prev)
    setIsSellBtn(prev => !prev)
  }
  
  const SellBtnPress = () => {
    setIsSellBtn(prev=>!prev)
    setIsBuyBtn(prev => !prev)
  } 

const rotateTheArrow =()=> 
setIsRotate(rotate => !rotate)

const changeColor =()=> setIsColorChange(color=> !color) 
 
  return (
    
   <View style={tw`flex-col items-center justify-start shadow-lg w-[180px] h-[400px] m-2.5`}> 
     
      <View style={tw`bg-gray-200 flex-row items-center justify-center w-full h-[37px]`}>
     <TouchableOpacity
     onPress={BuyBtnPress}
     style={[buyBtnStyle,tw.style(isBuyBtn && 'bg-emerald-300')]}
      >
        <Text style={[tw.style(isBuyBtn && "text-white"),tw` mx-auto text-md font-medium`]}>Buy</Text>
     </TouchableOpacity>
     <TouchableOpacity
     onPress={BuyBtnPress}
     style={[tw.style(isBuyBtn && "bg-emerald-300"),tw` mr-[6px] -ml-[14px] w-[26px] h-[26px] p-2.5`,{zIndex:-10,transform:[{rotate:"45deg"}]}]}
      >
     </TouchableOpacity>
    
     <TouchableOpacity
     onPress={SellBtnPress}
     style={[tw.style(isSellBtn && "bg-red-400"),tw`ml-[6px] -mr-[14px] w-[26px] h-[28px] p-2.5`,{zIndex:-10,transform:[{rotate:"45deg"}]}]}
      >
     </TouchableOpacity>
     
     <TouchableOpacity
     onPress={SellBtnPress}
     style={[tw.style(isSellBtn && "bg-red-400"),sellBtnStyle]}
      >
        <Text style={[tw.style(isSellBtn && "text-white"),tw`mx-auto text-md font-medium`]}>Sell</Text>
     </TouchableOpacity>
     
     </View> 
     <View style={tw`px-2.5 mt-5 bg-gray-200 flex-row items-center justify-between w-full h-[37px]`}>
      
       <MaterialIcons name="error" size={20} color="gray" />
       <Text style={tw`text-md font-medium`}>Limit </Text>
       <TouchableOpacity
        onPress={rotateTheArrow}
        style=
        {isRotate && styles.arrowDownStyle}
>
       <MaterialIcons 
       name="arrow-drop-down" size={30} color="gray" />
       </TouchableOpacity>
     </View>
     
     <View style={tw`px-2.5 mt-5 bg-gray-200 flex-row items-center justify-between w-full h-[37px]`}>
      
      <TouchableOpacity 
      onPress={()=>setDecreaseCount(decrease => decrease -1)}>
      <AntDesign name="minus" size={24} color="gray" />
      </TouchableOpacity>
      <TextInput 
       defaultValue=
       {singleBid}
     
       onChangeText=
       {(text)=> text}
      style={[tw`font-bold w-[100px]`,{outline:"none"}]}
      keyboardType="numeric"/>
      <TouchableOpacity>
      <AntDesign name="plus" size={24} color="black" 
       />
     </TouchableOpacity>
     
     </View>
     
     <View style={tw`px-2.5 mt-5 bg-gray-200 flex-row items-center justify-between w-full h-[37px]`}>
      
      <TouchableOpacity 
      onPress={()=>setDecreaseCount(decrease => decrease -1)}>
      <AntDesign name="minus" size={24} color="gray" />
      </TouchableOpacity>
      <TextInput 
      placeholder="Amount in BTC"
       onChangeText=
       {(text)=> text}
      style={[tw`font-bold w-[100px]`,{outline:"none"}]}
      keyboardType="numeric"/>
      <TouchableOpacity>
      <AntDesign name="plus" size={24} color="black" 
       />
     </TouchableOpacity>
     
     </View>
     
     <View style={tw`px-2.5 mt-2.5  flex-row items-center justify-between w-full h-[37px]`}>
      
  
      
      <View style={tw`flex-1 flex-col items-center justify-center  m-[5px]`}>
       
        <TouchableOpacity 
        onPress={()=> 
        setIsColorChange(color=> !color)}
        style=
        {[tw`w-[30px] h-[10px] bg-gray-200`,tw.style(isColorChange && "bg-emerald-300")]}></TouchableOpacity>
        <Text style=
        {tw`text-sm text-stone-400`}>25%</Text>
      </View>
      
      <View style={tw`flex-1 flex-col items-center justify-center  m-[5px]`}>
       
        <TouchableOpacity 
        onPress={()=> 
        setIsColorChange(color=> !color)}
        style=
        {[tw`w-[30px] h-[10px] bg-gray-200`,tw.style(isColorChange && "bg-emerald-300")]}></TouchableOpacity>
        <Text style=
        {tw`text-sm text-stone-400`}>50%</Text>
      </View>
      
      <View style={tw`flex-1 flex-col items-center justify-center  m-[5px]`}>
       
        <TouchableOpacity 
        onPress={()=> 
        setIsColorChange(color=> !color)}
        style=
        {[tw`w-[30px] h-[10px] bg-gray-200`,tw.style(isColorChange && "bg-emerald-300")]}></TouchableOpacity>
        <Text style=
        {tw`text-sm text-stone-400`}>75%</Text>
      </View>
      
      <View style={tw`flex-1 flex-col items-center justify-center  m-[5px]`}>
       
        <TouchableOpacity 
        onPress={()=> 
        setIsColorChange(color=> !color)}
        style=
        {[tw`w-[30px] h-[10px] bg-gray-200`,tw.style(isColorChange && "bg-emerald-300")]}></TouchableOpacity>
        <Text style=
        {tw`text-sm text-stone-400`}>100%</Text>
      </View>
      
     </View>
     <View style={[tw`mx-2.5 px-2.5 mt-5 bg-red-400 flex-row items-center justify-center w-[150px] h-[37px]`, tw.style(isBuyBtn && "bg-emerald-300")]}>
       
       <TouchableOpacity>
         <Text style={tw` text-white text-md `}>{isBuyBtn?'Buy':"Sell"} BTC </Text>
       </TouchableOpacity>
     </View>
   </View> 
    )
  
}



export const  Prices =()=>{ 
  
const [ask,setAsk] = useState([])
const [bid,setBid] = useState([])
    
useLayoutEffect(()=>{
  getOrderBook()

},[bid])
  
const getOrderBook =()=>{
 

axios.request(orderbook)
.then((response)=>{
  setAsk(response.data.asks),
  setBid(response.data.bids)
  
	
})


.catch(function (error) {
	console.error(error);
});
  
} 

const slicedBid = bid.slice(0,1)

const singleBid = slicedBid.map(item => item[0])
 
const slicedAsk = ask.slice(0,1)

const singleAsk = slicedAsk.map(item => item[0])
 
 const slicedBids = bid.slice(9,19)
 
 const slicedAsks = ask.slice(9,19)
  
  return (
<View>
<View style={tw`flex-row pr-2.5`}> 
   <CustomSwitch 
   singleAsk={singleAsk}
   singleBid={singleBid}/>
   
   <View style={tw`flex-col 2.5 mr-2.5 w-[150px] h-[400px] shadow-lg  p-2.5`}>
   
   <View >
    <View style={tw`flex-row items-center justify-between`}>
      <Text>Price</Text>
      <Text>amount</Text>
    </View>
 {slicedBids.map((item,index)=>{
   return (
  
   <View
   style={tw`flex-1 flex-row items-center justify-between bg-green-200`}>
   
   <View style={tw`flex-col`}>
   
   <Text style={tw`text-[14px]`}>
   {parseInt(item[0])}</Text>
   </View>
   <View>

   <Text style={tw`text-[14px]`}>{item[1]}</Text>
   </View>
   </View>
     
     )
 })}
   
   </View>
 
   <View >
    <View style={tw`flex-row items-center justify-between`}>
      <Text>Price</Text>
      <Text>amount</Text>
    </View>
 {slicedAsks.map((item,index)=>{
   return (
  
   <View
   style={tw`flex-1 flex-row items-center justify-between bg-red-200`}>
   
   <View style={tw`flex-col`}>
   
   <Text style={tw`text-[14px]`}>
   {parseInt(item[0])}</Text>
   </View>
   <View>

   <Text style={tw`text-[14px]`}>{item[1]}</Text>
   </View>
   </View>
     
     )
 })}
   
   </View>
 
  
   
   </View> 
</View> 
<View style={tw`flex-row items-center justify-around`}>
  <Text>Open orders</Text>
  <Text>funds</Text>
</View>
</View> 

   ) 
}



const buyBtnStyle = tw`flex-1 p-2.5`

const sellBtnStyle = tw`flex-1 p-2.5`

const styles = StyleSheet.create({
  
  arrowDownStyle :{
   
    transform :[{rotate:'180deg'}]
  }
  
})


