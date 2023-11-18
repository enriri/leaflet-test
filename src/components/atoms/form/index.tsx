import React from 'react';
import { StyledForm } from './style';

export const Form: React.FC<React.FormHTMLAttributes<HTMLFormElement>> = (
  props
) => {
  const { children } = props;
  return <StyledForm {...props}>{children}</StyledForm>;
};
