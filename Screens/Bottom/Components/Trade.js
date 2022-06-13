


import { StatusBar } from 'expo-status-bar';
import { Dimensions,ScrollView,Modal,FlatList,Image,TouchableOpacity,StyleSheet, Text,TextInput, View } from 'react-native';
import tw from "twrnc"
import { MaterialIcons,Ionicons } from '@expo/vector-icons';

import {useState,useEffect,useLayoutEffect} from "react"
import axios from "axios"
import {CoinPicker} from "./Components/CoinPicker.js"


 




   

  export const  Trade =()=>{
const [isModalVisible,setIsModalVisible] = useState(false)
const [isModalVisible2,setIsModalVisible2] = useState(false)

  const [coins,setCoins] = useState([])
  const [selectedCoin,setSelectedCoin] = useState("Select coin")
  const [selectedCoinImage,setSelectedCoinImage] = useState("")
  const [selectedCoinSymbol,setSelectedCoinSymbol] = useState("")
  
  const [selectedCoin2,setSelectedCoin2] = useState("Select coin")
  const [selectedCoinImage2,setSelectedCoinImage2] = useState("")
  const [selectedCoinSymbol2,setSelectedCoinSymbol2] = useState("")
  
  
  const changeModalVisibility =()=>
  setIsModalVisible(show=> !show)
  
  const changeModalVisibility2 =()=>
  setIsModalVisible2(show=> !show)
  
 const setData =(name,image,symbol)=>{
   setSelectedCoin(name)
   setSelectedCoinImage(image)
   setSelectedCoinSymbol(symbol)
   

 }
 
 const setData2 =(name,image,symbol)=>{
   
   setSelectedCoin2(name)
   setSelectedCoinImage2(image)
   setSelectedCoinSymbol2(symbol)

 }
 
 
  return (

<View style={tw`flex-auto m-2.5 shadow-lg`}> 
  <View style={headerContainer}>
     <Text style={tw`text-xl font-medium`}>Exchange</Text>
      <View style={headerIcons}>
     <Ionicons name="md-refresh" size={24} color="black" />
      <Ionicons name="md-close-outline" size={30} color="black" />
      </View>
  </View>
        
  <View 
 
  style={contentContainer}>
     <View style={exchangeLabel}>
       <Text style={exchangeLabelStyle}>Selling</Text>
       <Text style={exchangeLabelStyle}>
       Max 10,000</Text>
     </View>
      <TouchableOpacity
         onPress={()=>setIsModalVisible(show=> !show)}
         
       
         style={tw`items-center flex-row justify-between p-2.5`}
        
        >
         <Image 
         source={selectedCoinImage}
         resizeMode="contain"
         style={tw`mx-[10px] w-[40px] h-[40px] rounded-full `}
         />
         <Text style={tw`text-lg font-medium`}>{selectedCoin}</Text>
         <MaterialIcons 
         style={tw`ml-auto`}
         name="arrow-drop-down" size={24} color="black" />
      </TouchableOpacity>
      <View>
         <TextInput 
         keyboardType="numeric"
          style={[tw`shadow-lg  rounded-lg mx-2.5 text-xl py-2.5 px-2.5 my-2.5 `,{outline:"none"}]}
         placeholder={selectedCoinSymbol.toUpperCase()}
         />
      </View>
      
      <View style={exchangeLabel}>
       <Text style={exchangeLabelStyle}>Buying</Text>
       <Text style={exchangeLabelStyle}>
       Max 10,000</Text>
      </View>
      
      <TouchableOpacity
         onPress={()=>setIsModalVisible2(show=> !show)}
         
       
         style={tw`items-center flex-row justify-between p-2.5`}
        
        >
         <Image 
         source={selectedCoinImage2}
         resizeMode="contain"
         style={tw`mx-[10px] w-[40px] h-[40px] rounded-full `}
         />
         <Text style={tw`text-lg font-medium`}>{selectedCoin2}</Text>
         <MaterialIcons 
         style={tw`ml-auto`}
         name="arrow-drop-down" size={24} color="black" />
      </TouchableOpacity>
      <View>
         <TextInput 
         keyboardType="numeric"
          style={[tw`shadow-lg  rounded-lg mx-2.5 text-xl py-2.5 px-2.5 my-2.5 `,{outline:"none"}]}
         placeholder={selectedCoinSymbol2.toUpperCase()}
         />
      </View>
      
         <Modal 
         nRequestClose=
         {()=>setIsModalVisible(show=> !show)}
         animationType="fade"
         transparent={true}
          visible={isModalVisible||isModalVisible2}>
           
           <CoinPicker 
           
           setData2={setData}
           setData={setData}
           setIsModalVisible={setIsModalVisible}
           setIsModalVisible2={setIsModalVisible2}
           />
         </Modal>
    
  </View>
       
    
  
    
</View> 

   ) 
}





const headerContainer = tw`flex flex-row items-center justify-between p-2.5 
 border-b-2`  

const headerIcons = [tw`items-center justify-center flex-row`,{gap:5}]

 const exchangeLabel =tw`flex-row items-center justify-between py-1.5 px-2.5`   
 
 const exchangeLabelStyle = tw`text-sm font-light text-stone-500`
 
 const contentContainer = tw`my-2.5 flex-auto `