import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/Home';

const Stack = createNativeStackNavigator();

const RouterStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/*<Stack.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Stack.Navigator>
  );
};
export default RouterStack;
