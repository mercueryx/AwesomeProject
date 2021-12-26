import React from 'react';
import {Icon} from 'native-base';
import {View, Text,ScrollView,ImageBackground,Dimensions} from 'react-native';

// import Home from '../screens/home';
const image = { uri:"" };

export default function Home() {
    return (
      <ScrollView 
      style={{flex:1,backgroundColor:'#ffffff'}}
      showsVerticalScrollIndicator={false}>
<ImageBackground 
source={require('../image/bgi.jpg')}
style={{height:Dimensions.get('window').height/2.5,}}>
<view>
  <Icon name='location-sharp' style={{color:'#ffffff',fontSize:100}}>
    <Text>
      Kaisha App
    </Text>
  </Icon>
</view>
</ImageBackground>
      
        
      </ScrollView>
    );
}