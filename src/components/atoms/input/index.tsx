import React from 'react';
import { StyledInput } from './style';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return <StyledInput {...props} />;
};
