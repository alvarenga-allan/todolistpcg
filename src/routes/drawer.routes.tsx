import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeMenu from '../pages/Home';
import MainStack from './stack.routes';
import CustomDrawer from '../components/CustomDrawer';
const Drawer = createDrawerNavigator();

const Router = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{ drawerPosition: 'right', headerShown: false }}>
      <Drawer.Screen name="Tarefas" component={HomeMenu} />
      <Drawer.Screen name="Serviços" component={MainStack} />
      {/*<Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Drawer.Navigator >
  );
};
export default Router;
