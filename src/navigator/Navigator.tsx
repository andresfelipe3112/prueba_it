import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import SpecificIndicators from '../screens/SpecificIndicators';
import Stadistics from '../screens/Stadistics';





const Stack = createStackNavigator();

export const Navigator = () => {

  return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animationEnabled:true,
                headerMode: 'float'
                
            }}
            initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={ Home } />
          <Stack.Screen name="SpecificIndicators" component={ SpecificIndicators } />
          <Stack.Screen name="Stadistics" component={ Stadistics } />
        </Stack.Navigator>
  );
}