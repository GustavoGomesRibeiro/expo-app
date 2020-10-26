import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AppProvider from './hooks';
import Router from './routes/router';

export default function Index() {
  return (
      <>
        <NavigationContainer>
          <StatusBar style="auto" />
          <AppProvider>
            <Router/>      
          </AppProvider>    
        </NavigationContainer>
      </>
  );
}