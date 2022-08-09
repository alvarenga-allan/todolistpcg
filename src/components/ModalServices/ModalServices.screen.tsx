import React, { useState } from 'react';
import Modal from 'react-native-modal'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, ContentModalTasks, HeaderModalTasks, IconAndTitles, LeftModalTasks, RightModalTasks, TitleContentModalTasks } from './ModalServices.styles';
import { ModalAddTasksProps } from './ModalServices.types';
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
              <TitleContentModalTasks>Adicionar setor</TitleContentModalTasks>
            </ContentModalTasks>
          </IconAndTitles>
          <RightModalTasks>
            <TouchableOpacity onPress={onPress}>
              <CloseButtonModalIcon />
            </TouchableOpacity>
          </RightModalTasks>
        </HeaderModalTasks>
        <Input label='Nome'
          placeholder='Digite o nome do setor...' />
        <Input label='Cor de identificação'
          placeholder='Selecione a cor de identificação' />
      </Container>
    </Modal >
  );
};
export default ModalAddTasks;
