import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white}

`;

export const ContainerTasks = styled.View`
background-color: ${colors.white};
margin: 24px 16px 0 16px;

`;

export const ContainerInput = styled.View`
background-color: ${colors.grayMedium};
height: 44px;
justify-content: center;
align-items: center;
border-radius: 24px;
flex-direction:row;

`;

export const InputSearch = styled.TextInput`
background-color: ${colors.grayMedium};
height: 24px;
border-radius: 24px;
width:  90%;

`
export const TaskList = styled.FlatList`
`
