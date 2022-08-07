import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import Router from './routes/drawer.routes';
import RouterStack from './routes/drawer.routes';
const App = () => {
  return (
    <NavigationContainer>

      <RouterStack />
    </NavigationContainer>
  );
};

export default App;