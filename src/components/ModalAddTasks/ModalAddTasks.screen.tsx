import React from 'react';
import Modal from 'react-native-modal'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, ContentModalTasks, HeaderModalTasks, IconAndTitles, LeftModalTasks, RightModalTasks, TitleContentModalTasks } from './ModalAddTasks.styles';
import { ModalAddTasksProps } from './ModalAddTasks.types';
import CheckIcon from '../../assets/icons/CheckIcon';
import CloseButtonModalIcon from '../../assets/icons/CloseButtonModalIcon';


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
      </Container>
    </Modal>
  );
};
export default ModalAddTasks;
