import React from 'react';
import {SafeAreaView} from 'react-native';
import {WelcomeComponent} from './src/presentation/screen/WelcomeComponent';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WelcomeComponent />
    </SafeAreaView>
  );
};
