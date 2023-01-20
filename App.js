import {  StyleSheet, Text } from 'react-native';
import Home from './src/screen/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Shop from './src/screen/Shop';
import Camera from './src/screen/Camera';
import Search from './src/screen/Search';
import Favorite from './src/screen/Favorite';
import Details from './src/screen/Details';

const stack = new createNativeStackNavigator();
function StackContainer(){
  return (
    <stack.Navigator
      screenOptions={{headerShown:false}}>
    <stack.Screen name="Home" component={Home}/>
    <stack.Screen name="Details" component={Details}/>
  </stack.Navigator>
  )
}

const TabNav = new createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <TabNav.Navigator
        screenOptions={({route})=> (
          {tabBarActiveTintColor: '#e91e63',
          headerShown:false,
          tabBarShowLabel:false,
          tabBarIcon: ({focussed,color})=>{
            const tint = focussed ? "green" : "gray";
            switch(route.name){
              case "main":{
                return <Text style={{color}}>Hi</Text>
              }
              case "shop":{
                return <Text style={{color}}>shop</Text>
              }
              case "camera":{
                return <Text style={{color}}>camera</Text>
              }
              case "search":{
                return <Text style={{color}}>search</Text>
              }
              case "favorites":{
                return <Text style={{color}}>favorites</Text>
              }
            }
          }})
                        
      }>
        <TabNav.Screen name="main" component={StackContainer} 
          Options={{
            tabBarLabel: "Main",
            tabBarIcon: ({color,size})=>(<Text>main</Text>)
            }}
        />
        <TabNav.Screen name="shop" component={Shop}/>
        <TabNav.Screen name="camera" component={Camera}/>
        <TabNav.Screen name="search" component={Search}/>
        <TabNav.Screen name="favorites" component={Favorite}/>
      </TabNav.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
