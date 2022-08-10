import React, { useState } from 'react';
import Menu from '../../components/Menu/Menu.screen';
import { Container, ContainerInput, ContainerTasks, InputSearch, TaskList } from './Home.styles';
import { ButtonFloat, ModalAddTasks } from '../../components';
import SearchIcon from '../../assets/icons/SearchIcon';
import TaskCard from '../../components/TaskCard';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openAndCloseModal = () => {
    setModalVisible(!modalVisible)

  }
  const tasks = [
    {
      id: "1",
      title: 'Tarefa Incrível',
      date: '10 março de 2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing lit t aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
      sector: 'Relacionamento',
      priority: 'Alta prioridade',
      status: 'Em andamento',
    },
    {
      id: "2",
      title: 'Tarefa Incrível nº 2',
      date: '10 março de 2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing lit t aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
      sector: 'TI',
      priority: 'Média prioridade',
      status: 'Em andamento',
    },
    {
      id: "3",
      title: 'Tarefa Incrível nº 3',
      date: '10 março de 2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing lit t aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
      sector: 'Suporte',
      priority: 'Baixa prioridade',
      status: 'Pendente',
    },

  ]
  return (
    <Container>
      <Menu />
      <ContainerTasks>
        <ContainerInput>
          <SearchIcon />
          <InputSearch />
        </ContainerInput>
        <TaskList
          data={tasks}
          keyextractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return <TaskCard card={item} key={index} />
          }} />
      </ContainerTasks>
      <ButtonFloat onPress={openAndCloseModal} />
      {modalVisible && <ModalAddTasks visible={modalVisible} onPress={openAndCloseModal} />}


    </Container>
  );
};
export default Home;
