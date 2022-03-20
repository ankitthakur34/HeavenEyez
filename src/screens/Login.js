import { StyleSheet, Text, View ,TouchableOpacity,TextInput } from 'react-native'
import React,{useState} from 'react'
import Checkbox from 'expo-checkbox'

const Login = ({navigation}) => { 

  const [name,Setname] = useState("")
  const [password,SetPassword] = useState("")

  const submit=()=>{
    if(name==='ankit thakur' && password==="ankit34" ){
      alert('thankyou')
      navigation.navigate("Home")
      
    } else{
      alert("invalid username or password")
    }
  }

  const [agree,Setagree] = useState(false)
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeading}>Login Page</Text>
      <Text style={styles.mainSubHeading}>you can contact us  anytime at ankitsinghthakur6268@gmail.com</Text> 

      <View style={styles.inputContainer}> 
      <Text style={styles.inputtextStyle}>enter you username -</Text>
      <View style={styles.inputnameContainer}> 
      <TextInput style={styles.inputStyle}
       
       autoCapitalize= "none"
       autoCorrect= {false}
        value={name}
        onChangeText={(actualData)=> Setname(actualData) }
       />
       </View>
      <Text style={styles.inputtextStyle}>enter you password -</Text>
      <TextInput
      style={styles.inputStyle}
       autoCapitalize={false}
       autoCorrect= {false}
       secureTextEntry={true}
        value={password}
      onChangeText={(actualData)=> SetPassword(actualData) }
       />

      </View>
      <View style={styles.checkboxConatiner}>
           <Checkbox 
             value={agree}
           onChange={()=> Setagree(!agree) }
           color={ agree?"orange": undefined }
            />
            <Text style={styles.checktext} >I agree with all T&C</Text>
      </View>
      <View style={styles.btnConatiner} >
           <TouchableOpacity onPress={()=> submit()}
            //disabled={!agree}
             >
             <Text style={[styles.btnStyle,{
              //  backgroundColor: agree? "purple": "grey"
             }]}>SUBMIT</Text>
           </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer:{
    margin:20,
    marginVertical:70,
   

  },
  mainHeading:{
    fontSize:36,
    fontWeight:"bold",
    color:"purple",
    marginVertical:10,
    textAlign:"center",
    letterSpacing:1.5,
  },
  mainSubHeading:{
    fontWeight:"bold",
    fontSize:16,
    color:"violet",
    marginBottom:25,
    textAlign:"center",
    lineHeight:24,
    
    letterSpacing:1,
  },
  inputContainer:{
    marginVertical:20,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:20,
  },
  inputtextStyle:{
    textTransform:"capitalize",
    fontWeight:"bold",
    fontSize:16,
    letterSpacing:1,

  },
  inputStyle:{
    borderWidth:0.6,
    borderRadius:6,
    padding:5,
    marginVertical:10,
    width:270,
    height:37,
  },
  inputnameContainer:{
    marginBottom:30,
  },
  checkboxConatiner:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
  },
  checktext:{
    marginLeft:10,
    letterSpacing:1,
  },
  btnConatiner:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:50,
  },
  btnStyle:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:120,
    height:40,
    backgroundColor:"purple",
    textAlign:"center",
    borderRadius:10,
    color:"white",
    fontWeight:"bold",
    paddingHorizontal:20,
    paddingVertical:10,
    
  }
})
export default Login

