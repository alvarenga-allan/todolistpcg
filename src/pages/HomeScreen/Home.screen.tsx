import React, { useState } from 'react';
import Menu from '../../components/Menu/Menu.screen';
import SearchInput from '../../components/SearchInput';
import { Container } from './Home.styles';
import { ButtonFloat, ModalAddTasks } from '../../components';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openAndCloseModal = () => {
    setModalVisible(!modalVisible)
  }
  return (
    <Container>
      <Menu />
      <ButtonFloat onPress={openAndCloseModal} />
      {modalVisible && <ModalAddTasks visible={modalVisible} onPress={openAndCloseModal} />}
    </Container>
  );
};
export default Home;
