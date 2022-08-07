import React from 'react';
import Menu from '../../components/Menu/Menu.screen';
import SearchInput from '../../components/SearchInput';
import { Container } from './Home.styles';

const Home = () => {
  return (
    <Container>
      <Menu />
      <SearchInput />
    </Container>
  );
};
export default Home;
