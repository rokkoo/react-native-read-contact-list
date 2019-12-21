import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';

// Routes
import Routes from './src/routes';

const App = () => {
  return (
    <NavigationNativeContainer>
      <Routes />
    </NavigationNativeContainer>
  );
};

export default App;
