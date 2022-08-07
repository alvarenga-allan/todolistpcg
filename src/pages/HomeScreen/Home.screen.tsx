import React from 'react';
import Menu from '../../components/Menu/Menu.screen';
import SearchInput from '../../components/SearchInput';
import { Container } from './Home.styles';
import { ButtonFloat } from '../../components';

const Home = () => {
  return (
    <Container>
      <Menu />
      <ButtonFloat />
    </Container>
  );
};
export default Home;
