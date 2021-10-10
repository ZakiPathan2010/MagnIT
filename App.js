import React from 'react';
//import all the components we are going to use

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from './Screens/SignUp';
import Login from './Screens/Login';
import ForgotPassword from './Screens/ForgotPassword';


const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home">


      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'Sign Up',

          headerShown: false
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',

          headerShown: false
        }}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          title: 'ForgotPassword',

          headerShown: false
        }}
      />

    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />



    </NavigationContainer>
  );


}

