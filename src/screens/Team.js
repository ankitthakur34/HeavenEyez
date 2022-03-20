import { StyleSheet, Text, View ,FlatList,Image } from 'react-native'
import React,{useEffect,useState} from 'react'

const Team = () => {  

  const [userData,SetuserData] = useState();

  const getuserdata= async ()=>{
   try {
    const response = await fetch('https://thapatechnical.github.io/userapi/users.json');
    const data = await response.json();
    SetuserData(data);
   } catch (error) {
     console.log(error);
   }
  }

  useEffect(()=>{
     getuserdata();
  },[])

  return (
    <View style={styles.mainConatiner} >
      <Text style={styles.mainHeader}>Our Subscribers</Text>
      <FlatList data={userData}
      showsVerticalScrollIndicator={false}
         renderItem={({item})=>{
           return(
             <View  style={styles.userConatiner} >
                <Image style={styles.imgStyle}
                 source={{uri: item.image  }} 
                
                 />
                <View style={styles.userData} > 
                <Text style={[styles.nameStyle,styles.textStyle,{
                  fontSize:19,
                  fontWeight:"bold"
                }]}>{item.name} </Text>
                <Text style={[styles.emailStyle,styles.textStyle,]}>{item.email} </Text>
                <Text style={[styles.mobileStyle,styles.textStyle]}>{item.mobile} </Text>
                 </View>
             </View>
           )
         }}
       />
    </View>
  )
}
const styles = StyleSheet.create({
  mainConatiner:{
    display:"flex",
    justifyContent:"space-evenly",
    paddingHorizontal:20,
    textAlign:"center"
  },
  mainHeader:{
    textAlign:"center",
    margin:28,
    fontSize:22,
    fontWeight:"bold"
  },
  userConatiner:{ 
    margin:20,
    paddingBottom:15,
     display:"flex",
     justifyContent:"center",
     alignItems:"center",
     
     backgroundColor:"lightgrey",
     borderRadius:7,
  },
  imgStyle:{
    width:"100%",
    height: undefined,
    aspectRatio:1,
    marginBottom:15,
  },
  userData:{
    display:"flex",
     justifyContent:"center",
     alignItems:"center",
  },
  nameStyle:{
    color:"red"
  },
  textStyle:{
    fontSize:16,
    fontWeight:"300",
    letterSpacing:2,
  },
 
})

export default Team

