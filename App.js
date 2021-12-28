import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import CarListScreen from '../AwesomeProject/routes/carlistStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenMenu from './routes/homeStack';

const Stack = createNativeStackNavigator();

function LoginScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen_Menu"
          component={ScreenMenu}
          options={{
            header: () => null,
          }}
          ></Stack.Screen>

        <Stack.Screen
          name="Screen_CarList"
          component={CarListScreen}
          // options={{
          //   header: () => null,
          // }}
          ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default LoginScreen;
