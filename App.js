import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Landing from './screens/Landing';
import Create from './screens/Create';
// import Storage from './assets/Storage';


const Stack = createStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator 
          screenOptions={{
            headerShown: false
          }} >
        <Stack.Screen name = "Login" component = {Login} />
        <Stack.Screen name = "Landing" component = {Landing} />
        <Stack.Screen name = "Create" component={Create} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;