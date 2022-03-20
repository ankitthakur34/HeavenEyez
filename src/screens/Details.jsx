import { StyleSheet, Text, View ,FlatList,Image,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import YtData from '../components/YtData'
import { Video, AVPlaybackStatus } from 'expo-av';
import Teaser from '../components/Teaser';
import Bts from '../components/Bts';


const Details = ({navigation,route}) => { 


    const id = route.params.videoId;
  

    const selectedVideos = YtData.find((elem)=>{
        return( id===elem.id )
        })

  return ( 
   <View > 
  {/* // <Teaser/> */}
     <View style={styles.mainContainer} >
      <Text style={styles.mainHeader}>Videos Detail</Text> 

      
           <View style={styles.mainList} >
                        <Video style={styles.mainimg}
                   source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }} 
        useNativeControls
        resizeMode='contain'
        
         />
                <View style={styles.mainUserList} >
                  <Text style={styles.Listtitle}>{selectedVideos.title} </Text>
                  <Text style={styles.Listdesc}>{selectedVideos.description} </Text>
          
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("Videos") } >
              <Text style={styles.btnText} >GO BAck</Text>
           </TouchableOpacity>
           </View> 
           
      
    </View>
    {/* <Bts/> */}
   </View>
  
  )
} 
const styles = StyleSheet.create({
  mainContainer:{
    margin:20,
    marginVertical:40,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  mainHeader:{
    marginVertical:10,
    marginBottom:30,
    fontSize:26,
    fontWeight:"bold",
    color:"purple",
    letterSpacing:2,
  },
  mainList:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    //marginVertical:20,
    backgroundColor:"lightgrey",
    borderWidth:0.6,
  },
  mainimg:{
    width:"100%",
    height: undefined,
    aspectRatio:1,
    marginTop:-67,
    
  },
  mainUserList:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:40,
    paddingHorizontal:10,
    
  },
  Listtitle:{
    fontSize:20,
    fontWeight:"bold",
    letterSpacing:2,
    textTransform:"uppercase",
    textAlign:"center",
    marginBottom:15,
    marginTop:-70,
  },
  Listdesc:{
    fontSize:12,
    textAlign:"center",
    textTransform:"capitalize",

  },
  btn:{
    
    width:120,
    height:40,
    backgroundColor:"violet",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:8,
    marginBottom:10,
    
  },
  btnText:{
    fontSize:20,
    fontWeight:"bold",
  }
})

export default Details

