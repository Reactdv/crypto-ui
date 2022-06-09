
import { StatusBar } from 'expo-status-bar';

import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import {BottomTabStack} from "./Screens/Bottom/BottomTabStack.js"


const Stack = createStackNavigator()

const MyStack =()=>{
  return (
    
   <Stack.Navigator>
   
       <Stack.Screen 
       name="BottomTabStack"
       component={BottomTabStack}
       options={{headerShown:false}}
       />
       
   </Stack.Navigator>
    
    )
}




export default function App() {
  return (

<NavigationContainer>
    <MyStack />
</NavigationContainer>
   ) 
}



