// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AddMenuScreen from './AddMenuScreen';
import FilterMenuScreen from './FilterMenuScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddMenuScreen" component={AddMenuScreen} />
        <Stack.Screen name="FilterMenuScreen" component={FilterMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
