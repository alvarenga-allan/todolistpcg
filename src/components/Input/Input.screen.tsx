
import React from 'react';
import { Container, InputContainer, Label } from './Input.styles';
import { InputProps } from './Input.types'
const Input: React.FC<InputProps> = props => {
  const { label } = props;
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer {...props} />
    </Container >
  );
};
export default Input;
