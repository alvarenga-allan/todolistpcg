import React from 'react';
import PlusIcon from '../../assets/icons/PlusIcon';
import { Container } from './ButtonFloat.styles';
import { ButtonFloatProps } from './ButtonFloat.types';

const ButtonFloat: React.FC<ButtonFloatProps> = props => {
  const { onPress } = props
  return (

    <Container onPress={onPress}>
      <PlusIcon />
    </Container >
  );
};
export default ButtonFloat;
