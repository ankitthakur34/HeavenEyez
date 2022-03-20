import { StyleSheet, Text, View ,FlatList,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import YtData from '../components/YtData'
import { Video, AVPlaybackStatus } from 'expo-av';
import Details from '../screens/Details';

const Videos = ({navigation}) => {
  return (
    <View style={styles.mainContainer} >
      <Text style={styles.mainHeader}>Videos</Text> 

      <FlatList  
      showsVerticalScrollIndicator= {false}
      keyExtractor={(key)=> key.id }
       data={YtData}
       renderItem={({item})=>{
         return(
           <View style={styles.mainList} >
                        <Video style={styles.mainimg}
                   source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }} 
        useNativeControls
        resizeMode='contain'
        
         />
                <View style={styles.mainUserList} >
                  <Text style={styles.Listtitle}>{item.title} </Text>
                  <Text style={styles.Listdesc}>{item.description} </Text>
          
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('Details',{
                  videoId: item.id,
                }) } >
              <Text style={styles.btnText} >Details</Text>
           </TouchableOpacity>
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
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  mainHeader:{
    marginVertical:10,
    marginBottom:30,
    fontSize:46,
    fontWeight:"bold",
    color:"purple",
    letterSpacing:2,
  },
  mainList:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginVertical:20,
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
    fontSize:30,
    fontWeight:"bold",
    letterSpacing:2,
    textTransform:"uppercase",
    textAlign:"center",
    marginBottom:15,
  },
  Listdesc:{
    fontSize:17,
    textAlign:"center",
    textTransform:"capitalize",

  },
  btn:{
    marginVertical:15,
    width:120,
    height:40,
    backgroundColor:"violet",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:8,
    
  },
  btnText:{
    fontSize:20,
    fontWeight:"bold",
  }
})

export default Videos

