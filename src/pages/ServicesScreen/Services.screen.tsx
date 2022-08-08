import React from 'react';
import { ButtonFloat } from '../../components';
import Menu from '../../components/Menu/Menu.screen';
import SearchInput from '../../components/SearchInput';
import { Container, Title } from './Services.styles'

const Services = () => {
  return (
    <Container>
      <Menu />
      <SearchInput />
      <Title>oioi</Title>
      <ButtonFloat onPress={() => { }} />
      {/* {modalVisible && <ModalAddTasks visible={modalVisible} onPress={openAndCloseModal} />} */}
    </Container>
  );
};
export default Services;
