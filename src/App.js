import React from 'react';
import 'react-native-gesture-handler';
import {Onboarding, SplashScreen} from './pages';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      <Onboarding />
    </NavigationContainer>
  );
};

export default App;
