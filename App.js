import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createDrawerNavigator } from '@react-navigation/drawer'

//screens
import Login from './src/screens/Login'
import Home from './src/screens/Home'
import Team from './src/screens/Team'
import Videos from './src/screens/Videos'
import Contact from './src/screens/Contact' 
import teaserNbts from './src/screens/teaserNbts' 


//components
import CustomNav from './src/components/CustomNav'
import Details from './src/screens/Details'

const App = () => { 
  const Drawer = createDrawerNavigator();
  return ( 
    
    
    <NavigationContainer> 
    
    <Drawer.Navigator initialRouteName='Login' screenOptions={{
    }}  >
      <Drawer.Screen name='Login' component={Login} options={{
        headerShown: false,
        
      }} />
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Team' component={Team} />
      <Drawer.Screen name='Videos' component={Videos} />
      <Drawer.Screen name='Contact' component={Contact} />
      <Drawer.Screen name='Details' component={Details}  /> 
      <Drawer.Screen name='teaserNbts' component={teaserNbts}  />
    </Drawer.Navigator>

    </NavigationContainer>
    
  )
} 

const styles = StyleSheet.create({})

export default App

