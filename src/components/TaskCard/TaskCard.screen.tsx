import React from 'react';
import { BodyCard, BodyText, ContainerCard, FooterCard, FooterText, HeaderCard, HeaderText, PriorityContainer, SectorContainer, StatusContainer } from './TaskCard.styles';
import { Text } from 'react-native'
import { TaskCardProps } from './TaskCard.types';
import PointIcon from '../../assets/icons/PointIcon';
import colors from '../../../styles/colors';
import AlertIcon from '../../assets/icons/AlertIcon';
import TimeIcon from '../../assets/icons/TimeIcon';
import { When } from 'react-if';
import ClockIcon from '../../assets/icons/ClockIcon';


const TaskCard: React.FC<TaskCardProps> = props => {
  const { card } = props;
  return (
    <ContainerCard sector={card.sector}>
      <HeaderCard>
        <HeaderText>{card.title}</HeaderText>
        <Text>{card.date}</Text>
      </HeaderCard>
      <BodyCard>
        <BodyText>{card.description}</BodyText>
      </BodyCard>
      <FooterCard>
        <When condition={card.sector === 'Relacionamento'}>
          <SectorContainer>
            <PointIcon width={5.75} height={7.32} fill={colors.orange} />
            <FooterText>{card.sector}</FooterText>
          </SectorContainer>
          <PriorityContainer>
            <AlertIcon fill={colors.magenta} />
            <FooterText>{card.priority}</FooterText>
          </PriorityContainer>
          <StatusContainer>
            <TimeIcon width={6} height={8} />
            <FooterText>{card.status}</FooterText>
          </StatusContainer>
        </When>
        <When condition={card.sector === 'TI'}>
          <SectorContainer>
            <PointIcon width={5.75} height={7.32} fill={colors.magenta} />
            <FooterText>{card.sector}</FooterText>
          </SectorContainer>
          <PriorityContainer>
            <AlertIcon fill={colors.yellow} />
            <FooterText>{card.priority}</FooterText>
          </PriorityContainer>
          <StatusContainer>
            <TimeIcon width={6} height={8} />
            <FooterText>{card.status}</FooterText>
          </StatusContainer>
        </When>
        <When condition={card.sector === 'Suporte'}>
          <SectorContainer>
            <PointIcon width={5.75} height={7.32} fill={colors.green} />
            <FooterText>{card.sector}</FooterText>
          </SectorContainer>
          <PriorityContainer>
            <AlertIcon fill={colors.primaryLight} />
            <FooterText>{card.priority}</FooterText>
          </PriorityContainer>
          <StatusContainer>
            <ClockIcon width={6} height={8} />
            <FooterText>{card.status}</FooterText>
          </StatusContainer>
        </When>


      </FooterCard>
    </ContainerCard>
  );
};
export default TaskCard;
