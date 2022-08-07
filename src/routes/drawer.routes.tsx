import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeMenu from '../pages/HomeScreen';
import Services from '../pages/ServicesScreen';
import CustomDrawer from '../components/CustomDrawer';
const Drawer = createDrawerNavigator();

const Router = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{ drawerPosition: 'right', headerShown: false }}>
      <Drawer.Screen name="Tasks" component={HomeMenu} />
      <Drawer.Screen name="Services" component={Services} />
      {/*<Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Drawer.Navigator >
  );
};
export default Router;
