import React, { useState } from 'react';
import { ButtonFloat } from '../../components';
import Menu from '../../components/Menu/Menu.screen';
import ModalServices from '../../components/ModalServices';
import SearchInput from '../../components/SearchInput';
import { Container, Title } from './Services.styles'

const Services = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openAndCloseModal = () => {
    setModalVisible(!modalVisible)
  }
  return (
    <Container>
      <Menu />
      <SearchInput />
      <Title>Em Manutenção</Title>
      <ButtonFloat onPress={openAndCloseModal} />
      {modalVisible && <ModalServices visible={modalVisible} onPress={openAndCloseModal} />}
    </Container>
  );
};
export default Services;
