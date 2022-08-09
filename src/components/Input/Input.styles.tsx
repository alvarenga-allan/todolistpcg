import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.View`
margin: 0px 22px 0px 24px;
`;

export const InputContainer = styled.TextInput`
  height: 34px;
  border: solid 1px #BCBEC0;
  border-radius: 8px;
  padding:6px;
`
export const Label = styled.Text`
margin: 16px 0 8px 0;
color: ${colors.gray400}
`
export const ContainerSelects = styled.View`
  border-radius: 8px;
  height:150px;
  justify-content:space-between;
  flex-direction: row;
`
export const ContainerRightSelects = styled.View`
width: 50%;
  border-radius: 8px;
  height: 34px;
`
export const ContainerLeftSelects = styled.View`
width: 50%;
  border-radius: 8px;
  height: 34px;
`