import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Archivo_400Regular, Archivo_700Bold} from '@expo-google-fonts/archivo'
import {Poppins_400Regular, Poppins_700Bold, useFonts} from '@expo-google-fonts/poppins'

import { NavigationContainer } from '@react-navigation/native';
import AppProvider  from './src/hooks/index';
import Router from './src/routes/index';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <AppProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    </AppProvider>
  );
}