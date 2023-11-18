import React from 'react';
import { StyledButton } from './style';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const { children } = props;
  return <StyledButton {...props}>{children}</StyledButton>;
};
