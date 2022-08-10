import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.View`
  background-color: ${colors.primary};
  flex-direction:row;
  height: 47px;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 15px 17px 15px 17px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.501961);
`;

export const Title = styled.Text`
  color: #ffffff;
`;

export const Button = styled.TouchableOpacity`
`
