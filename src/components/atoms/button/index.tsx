import React from 'react';
import { ButtonThemes, StyledButton, ButtonSizes, ButtonType } from './style';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonThemes;
  size?: ButtonSizes;
  customType?: ButtonType;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, theme, size, customType } = props;
  return (
    <StyledButton
      customType={customType || 'default'}
      size={size || 'default'}
      theme={theme || 'default'}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
