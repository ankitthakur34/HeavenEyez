import { StyleSheet, Text, View , ImageBackground,Image } from 'react-native'
import React from 'react'
import{ DrawerContentScrollView , DrawerItemList } from '@react-navigation/drawer'

const CustomNav = (props) => {
  return ( 
      <View style={styles.mainNavContainer} >
   <DrawerContentScrollView {...props} style={styles.NavContainer} > 
            
                <ImageBackground style={styles.headerbackimg} source={require('../../assets/back.jpg')} >
                     <View style={styles.headerNavItemsContainer}>
                         <Image style={styles.headeruserimg} source={require('../../assets/userface.jpg')}/>
                         <Text style={styles.headertext} >Ankit Thakur</Text>
                         <Text style={styles.headertext1}>100</Text>
                     </View>
                </ImageBackground>
           
       <DrawerItemList {...props} />
   </DrawerContentScrollView>
   </View>
  )
}
const styles = StyleSheet.create({
    NavContainer:{
        
        borderColor:"white",
    },
    headerbackimg:{
        width:"100%",
        height: undefined,
        
    },
    headerNavItemsContainer:{
        padding:10, 
        display:"flex",
        justifyContent:"space-between",
        alignContent:"center",
     
    },
    headeruserimg:{
        width:90,
        height:90,
        borderRadius:45,
        marginHorizontal:20,
        marginTop:20,
    },
    headertext:{
        fontSize:18,
        fontWeight:"bold",
        color:"white",
        marginTop:10,
    },
    headertext1:{
        fontSize:16,
        fontWeight:"bold",
        color:"white",
    }
})
export default CustomNav

