


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from "twrnc"
import { Ionicons } from '@expo/vector-icons';







  export const  Trade =()=>{
    

  
  return (

<View style={tw`m-2.5`}> 
  <View style={headerContainer}>
     <Text style={tw`text-xl font-medium`}>Exchange</Text>
      <View style={headerIcons}>
     <Ionicons name="md-refresh" size={24} color="black" />
      <Ionicons name="md-close-outline" size={30} color="black" />
      </View>
  </View>
  <View style={contentContainer}>
     <View style={exchangeLabel}>
       <Text style={exchangeLabelStyle}>Selling</Text>
       <Text style={exchangeLabelStyle}>
       Max 10,000</Text>
     </View>
  
  </View>
    
</View> 

   ) 
}





const headerContainer = tw`flex flex-row items-center justify-between p-2.5 
 shadow-lg`  

const headerIcons = [tw`items-center justify-center flex-row`,{gap:5}]

 const exchangeLabel =tw`flex-row items-center justify-between py-1.5 px-2.5`   
 
 const exchangeLabelStyle = tw`text-sm font-light text-stone-500`
 
 const contentContainer = tw`my-2.5 shadow-lg `