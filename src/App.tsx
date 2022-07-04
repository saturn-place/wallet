import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './types';

// screens
import Home from './screens/Home';
import Send from './screens/Send';
import Receive from './screens/Receive';
import Transactions from './screens/Transactions';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Transactions" component={Transactions} />
        <Stack.Screen name="Send" component={Send} />
        <Stack.Screen name="Receive" component={Receive} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
