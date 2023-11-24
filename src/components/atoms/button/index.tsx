import React from 'react';
import { ButtonThemes, StyledButton, ButtonSizes, ButtonType } from './style';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonThemes;
  size?: ButtonSizes;
  customtype?: ButtonType;
  isactive?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, theme, size, customtype } = props;
  return (
    <StyledButton
      customtype={customtype || 'default'}
      size={size || 'default'}
      theme={theme || 'default'}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
