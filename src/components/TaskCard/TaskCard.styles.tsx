import styled from 'styled-components/native';
import colors from '../../../styles/colors';
import { TaskCardItems } from './TaskCard.types';

export const BorderColor: Record<TaskCardItems['sector'], string> = {
  TI: colors.magenta,
  Relacionamento: colors.orange,
  Suporte: colors.green
};

export const ContainerCard = styled.View<TaskCardItems['sector']>`
height:143px;
border-radius: 8px;
margin-top: 16px;
border-left-width: 7px;
border-left-color:${props => BorderColor[props.sector]};



`;

export const HeaderCard = styled.View`
flex-direction: row;
justify-content: space-between;
margin: 12px 16px 7px 22px;
`;

export const HeaderText = styled.Text`
font-size: 12px;
font-weight: 700;
color: ${colors.gray400};
`;

export const BodyCard = styled.View`
width:100%;
margin: 7px 13px 23px 22px;

`;

export const BodyText = styled.Text`
font-size: 12px;
color: ${colors.gray400};
`;

export const FooterCard = styled.View`
flex-direction: row;
justify-content:space-between;
margin: 12px 22px;
`;

export const FooterText = styled.Text`
font-size: 10px;
margin-left: 5px;
`;

export const SectorContainer = styled.View`
flex-direction: row;
align-items: center;

`;
export const PriorityContainer = styled.View`
flex-direction: row;
align-items: center;

`;
export const StatusContainer = styled.View`
flex-direction: row;
align-items: center;

`;