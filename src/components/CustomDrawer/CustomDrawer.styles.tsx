import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.SafeAreaView`
flex: 1;
margin: 0px 36px 0px 17px;
`;

export const HeaderDrawer = styled.View`
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  margin-bottom: 12px;
`

export const TitleDrawer = styled.Text`
  color: ${colors.primaryDark};
  font-size: 14px;
  font-weight: 700;
  line-height: 23px;
`;


export const ButtonCloseDrawer = styled.TouchableOpacity`

`

export const LineDrawer = styled.View`
height: 1px;
background-color: ${colors.grayMedium};
margin-bottom: 32px;
`

export const ButtonDrawer = styled.TouchableOpacity`
  height: 46px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom:16px;

`
export const IconAndTitles = styled.View`
  flex-direction: row;
`

export const LeftDrawer = styled.View`
  align-items: center;
  margin-right: 9px;

 
`

export const ContentDrawer = styled.View`
  
`

export const TitleContentDrawer = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.primaryDark};
  margin-bottom: 4px;
`
export const DescriptionContentDrawer = styled.Text`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: ${colors.primaryDark};
  /* font-family: 'Roboto'; */
`
export const RightDrawer = styled.View`
  margin-top: 4px;
`