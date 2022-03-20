import { StyleSheet, Text, View ,FlatList ,Image } from 'react-native'
import React from 'react'
import YtData from '../components/YtData'
const Bts = () => {
  return (
    <View> 
    <Text style={styles.mainheader} >Behind The Scenes -</Text>
      <FlatList 
      horizontal
       data={YtData}
       renderItem={({item})=>{
           return(
               <View style={styles.mainContainer} >
                   <Image source={item.bts} style={styles.imgStyle} /> 
                   <Text style={styles.textStyle} >{item.title} </Text>
               </View>
               
           )
       }}
       />
    </View>
  )
}
const styles = StyleSheet.create({
mainContainer:{
 
 margin:20,
 
  width:200,
  height: "auto",
  borderWidth:0.5,
},
mainheader:{
    marginTop:15,
   textAlign:"center",
   fontSize:22,
   fontWeight:"bold",
   color:"purple",
},
imgStyle:{
    width:"100%",
    height: undefined,
    aspectRatio:1,
    marginBottom:10,
  
},
textStyle:{
    textAlign:"center",
    color:"purple",
    fontSize:17,
    fontWeight:"bold",
    marginBottom:4,
}
})

export default Bts

