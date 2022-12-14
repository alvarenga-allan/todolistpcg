import React, { useState } from 'react';
import Modal from 'react-native-modal'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, ContentModalTasks, HeaderModalTasks, IconAndTitles, LeftModalTasks, RightModalTasks, TitleContentModalTasks } from './ModalAddTasks.styles';
import { ModalAddTasksProps } from './ModalAddTasks.types';
import CheckIcon from '../../assets/icons/CheckIcon';
import CloseButtonModalIcon from '../../assets/icons/CloseButtonModalIcon';
import Input from '../Input';
import { ContainerLeftSelects, ContainerRightSelects, ContainerSelects } from '../Input/Input.styles';


const ModalAddTasks: React.FC<ModalAddTasksProps> = props => {
  const { visible, onPress } = props;
  return (
    <Modal
      isVisible={visible}
      style={{ margin: 0 }}
    >
      <Container>

        <HeaderModalTasks>
          <IconAndTitles>
            <LeftModalTasks>
              <CheckIcon />
            </LeftModalTasks>
            <ContentModalTasks>
              <TitleContentModalTasks>Adicionar Tarefa</TitleContentModalTasks>
            </ContentModalTasks>
          </IconAndTitles>
          <RightModalTasks>
            <TouchableOpacity onPress={onPress}>
              <CloseButtonModalIcon />
            </TouchableOpacity>
          </RightModalTasks>
        </HeaderModalTasks>
        <Input label='Nome'
          placeholder='Digite o nome da tarefa...' />
        <Input label='Descrição (opcional)'
          placeholder='Adicione a descrição' />
        <ContainerSelects>
          <ContainerRightSelects>
            <Input label='Data limite'
              placeholder='dd/mm/ano' />
            <Input label='Prioridade'
              placeholder="Nível de prioridades" />
          </ContainerRightSelects>
          <ContainerLeftSelects>
            <Input label='Setor'
              placeholder='Selecione o setor' />
            <Input label='Status'
              placeholder='Selecione o status' />
          </ContainerLeftSelects>
        </ContainerSelects>
      </Container>
    </Modal >
  );
};
export default ModalAddTasks;
