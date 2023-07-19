import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './src/pages/HomePage';
import MovieScreen from './src/pages/MovieScreen';
import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded]=useFonts({
    Regular:require("./assets/fonts/static/NunitoSans_10pt_Condensed-Regular.ttf"),
    Bold:require("./assets/fonts/static/NunitoSans_10pt_Condensed-Bold.ttf")

  });
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="home" component={HomePage} options={{headerShown:false}} />
        <Stack.Screen name="movie" component={MovieScreen} options={{headerShown:false}} />
        {/* Other stack screens */}
      </Stack.Navigator>
    </NavigationContainer>
  ) 
  
}