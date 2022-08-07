import { useNavigation, DrawerActions } from '@react-navigation/native';
import React from 'react';
import MenuIcon from '../../assets/icons/MenuIcon';
import { Container, Title, Button } from './Menu.styles';

const Menu = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <Title>Meu Quadro</Title>
      <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())}><MenuIcon /></Button>
    </Container >
  );
};
export default Menu;
