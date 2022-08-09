import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
  margin-top:90%;
  border-radius:4px;
  padding:15px;
`

export const Title = styled.Text`
  color:${colors.primaryDark};
`;

export const HeaderModalTasks = styled.View`
  flex-direction: row;
  justify-content: space-between;
 
`

export const IconAndTitles = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 35px 24px 0 24px;
`

export const LeftModalTasks = styled.View`
  align-items: center;
  margin-right: 9px;
 
`

export const ContentModalTasks = styled.View`  
`
export const TitleContentModalTasks = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.primaryDark};
  margin-bottom: 4px;
`

export const RightModalTasks = styled.View`
  margin-top: 4px;
  margin: 27px 24px 0 24px;
`