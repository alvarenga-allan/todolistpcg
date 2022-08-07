import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import Router from './routes/drawer.routes';
import Router from './routes/drawer.routes';
const App = () => {
  return (

    <NavigationContainer>

      <Router />
    </NavigationContainer>

  );
};

export default App;