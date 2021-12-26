import React,{useState} from 'react';
import {Icon,NativeBaseProvider,Item,Label,Input,Button} from 'native-base';
import {View, Text,ScrollView,ImageBackground,Dimensions,StyleSheet,Image,TextInput} from 'react-native';



const LoginScreen =({navigation}) => {


    return (
      // <NativeBaseProvider>
  <ScrollView 
      style={{flex:1,backgroundColor:'#ffffff'}}
      showsVerticalScrollIndicator={false}>
<ImageBackground 
source={require('../AwesomeProject/image/bgi.jpg')}
style={{height:Dimensions.get('window').height/2.5,}}>
<View style={styles.Logo}>
  {/* <Icon name="location-sharp" style={{color:'#ffffff',fontSize:100}}>
    <Text>
      Kaisha App
    </Text>
  </Icon> */}
<Image style={{width:120,height:120}} source={require('../AwesomeProject/image/unnamed.png')}></Image>
<Text style={styles.Title} >Car List App</Text>
</View>
</ImageBackground>
      <View style={styles.LoginContainer}>
        
     <View style={styles.LoginInputContainer}>
     <Text style={styles.LoginContentTitle}>
  System Menu
  
</Text>
<View style={{marginTop:30}}>
{/* <Item floatingLabel style={{borderColor:'#4632A1'}}>
  <Label>Email</Label>
  <Input value="mercueryx@gmail.com" keyboardType="email-address"></Input>
  <Icon name="checkmark" style={{color: '#4632A1'}} />

</Item>
<Item floatingLabel style={{borderColor:'#4632A1',marginTop:20}}>
  <Label>Password</Label>
  <Input value="******" ></Input>
  <Icon name="eye" style={{color: '#4632A1'}} />

</Item> */}
<Button rounded style={[styles.MenuButton,styles.ShadowButton,{shadowColor:'#111111'}]}>
<Text style={styles.ButtonText}>
  Check Car Owner
</Text>
</Button>

<Button rounded style={[styles.MenuButton,styles.ShadowButton,{shadowColor:'#111111',marginTop:20}]}>
<Text style={styles.ButtonText}>
 Add New Car 
</Text>
</Button>
</View >
     </View>
      </View>
        
      </ScrollView>
      // </NativeBaseProvider>
    
    );
}; 
export default LoginScreen;


const styles=StyleSheet.create({
Logo:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
},

Title:{
 padding:10,
  color:'#ffffff',
  fontSize:22,
  fontWeight:'bold',
  textTransform:'uppercase',

},

LoginContainer:{
  paddingTop:20,
  flex:1.5,
  backgroundColor:'white',
  bottom:50,
  borderTopStartRadius:60,
  borderTopEndRadius:60,
 
},

LoginInputContainer:{
  padding:30,
 
},

LoginContentTitle:{
  color:'#111111',
  fontSize:20,
  fontWeight:'bold',
  textTransform:'uppercase',
},

MenuButton:{
  alignSelf:'center',
  backgroundColor:'#ffffff',
  width:Dimensions.get('window').width /1.5,
  justifyContent:'center',

},

ButtonText:{
color:'#111111',
fontSize:16,
fontWeight:'bold',
textTransform:'uppercase',
},
ShadowButton:{
  shadowOffset:{width:1,height:10},
  shadowOpacity:0.4,
  shadowRadius:3,
  elevation:15,
},

});