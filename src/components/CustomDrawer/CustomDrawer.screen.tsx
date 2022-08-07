import { useNavigation, DrawerActions } from '@react-navigation/native';
import React from 'react';
import CloseIcon from '../../assets/icons/CloseIcon';
import SectorIcon from '../../assets/icons/SectorIcon';
import TasksIcon from '../../assets/icons/TasksIcon';
import ChevronRightIcon from '../../assets/icons/ChevronRightIcon';
import { Container, HeaderDrawer, TitleDrawer, ButtonCloseDrawer, LineDrawer, ButtonDrawer, LeftDrawer, ContentDrawer, TitleContentDrawer, RightDrawer, DescriptionContentDrawer, IconAndTitles } from './CustomDrawer.styles';

const CustomDrawer = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <HeaderDrawer>
        <TitleDrawer>Tasks App</TitleDrawer>
        <ButtonCloseDrawer>
          <CloseIcon />
        </ButtonCloseDrawer>
      </HeaderDrawer>
      <LineDrawer />
      <ButtonDrawer>
        <IconAndTitles>
          <LeftDrawer>
            <TasksIcon />
          </LeftDrawer>
          <ContentDrawer>
            <TitleContentDrawer>Tarefas</TitleContentDrawer>
            <DescriptionContentDrawer>Vizualize e adicione tarefas</DescriptionContentDrawer>
          </ContentDrawer>
        </IconAndTitles>
        <RightDrawer>
          <ChevronRightIcon />
        </RightDrawer>
      </ButtonDrawer>
      <ButtonDrawer>
        <IconAndTitles>
          <LeftDrawer>
            <TasksIcon />
          </LeftDrawer>
          <ContentDrawer>
            <TitleContentDrawer>Setores</TitleContentDrawer>
            <DescriptionContentDrawer>Vizualize e cadastre setores</DescriptionContentDrawer>
          </ContentDrawer>
        </IconAndTitles>
        <RightDrawer>
          <ChevronRightIcon />
        </RightDrawer>
      </ButtonDrawer>
    </Container >
  );
};
export default CustomDrawer;
