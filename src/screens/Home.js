import { StyleSheet, Text, View ,Image ,TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.mainConatiner}>
      <Image style={styles.imgstyle}
       source={require('../../assets/face.jpg')} />
      <Text style={styles.mainHeading1}>welcome to</Text>
      <Text style={styles.mainHeading2}>heaveneyez</Text> 
      <View style={styles.descContainer} >
        <Text style={styles.desc}>
        HeavenEyez is a YouTube Channel which is started by some friends for fun , where they make comedy skeches, relateable content and intellectual videos.
        </Text>
      </View>
      <View style={styles.footer}>
          <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("Videos") } >
            <Text style={styles.btnText}>Watch our Videos</Text>
            
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
mainConatiner:{
  margin:20,
},
imgstyle:{
  display:"flex",
  justifyContent:"center",
  alignSelf:"center",
  width:250,
  height: 250,
  aspectRatio:1,
  borderRadius: 125,
  marginVertical:20,
},
 mainHeading1:{
  fontSize:32,
  fontWeight:"bold",
  textAlign:"center",
  textTransform:"uppercase",
  letterSpacing:2,
  color:"purple",
  marginBottom:5,
},
 mainHeading2:{
  fontSize:28,
  fontWeight:"bold",
  textAlign:"center",
  textTransform:"uppercase",
  letterSpacing:2,
  color:"violet",
},
descContainer:{
  marginVertical:30,
 
},
desc:{
  fontSize:15,
  fontWeight:"bold",
  textAlign:"center",
  textTransform:"capitalize" ,
  letterSpacing:2,
  color:"navy",
},
btn:{
  textAlign:"center",
  display:"flex",
  justifyContent:"center",
  alignSelf:"center",
  marginTop:30,
  width:180,
  height:50,
  backgroundColor:"orange",
  borderRadius:12,
  paddingVertical:10,
  paddingHorizontal:4,
},
btnText:{
  textAlign:"center",
  fontWeight:"bold",
  fontSize:18,
  letterSpacing:1.5,

  
}

})
export default Home

