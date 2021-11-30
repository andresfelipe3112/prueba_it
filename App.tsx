import React from 'react';
import 'react-native-gesture-handler';
import { Navigator } from './src/navigator/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import ContextAPi from './src/context/contextAPi';



const App = () => {
  return (
    <NavigationContainer>
      <ContextAPi>
        <Navigator />
      </ContextAPi>
    </NavigationContainer>
  )
}

export default App;
