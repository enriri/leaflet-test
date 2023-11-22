import styled, { css } from 'styled-components';

export type ButtonType = 'default' | 'createItem' | 'delete';

export type ButtonThemes = 'default' | 'dark' | 'light';

export type ButtonSizes = 'default' | 'large';

type themesProps = {
  [key: string]: {
    primaryColor: string;
    secondaryColor: string;
    fontColor: string;
  };
};

type sizeProps = {
  [key: string]: {
    height: string;
    width: string;
  };
};

const themes: themesProps = {
  default: {
    primaryColor: '',
    secondaryColor: '',
    fontColor: '',
  },
  light: {
    primaryColor: '#333333',
    secondaryColor: '#d6d8db',
    fontColor: '#d6d8db',
  },
  dark: {
    primaryColor: '#d6d8db',
    secondaryColor: '#333333',
    fontColor: '#333333',
  },
};

const sizes: sizeProps = {
  default: {
    height: '',
    width: '',
  },
  large: {
    height: '40px',
    width: '',
  },
};

export const StyledButton = styled.button<{
  theme: ButtonThemes;
  size: ButtonSizes;
  customType: ButtonType;
}>`
  ${({ customType, theme, size }) => {
    const isCreateItem = customType === 'createItem';
    const isDeleteItem = customType === 'delete';
    const border = isCreateItem || isDeleteItem ? '0px' : '1px';

    return css`
      border: ${border} solid ${themes[theme].secondaryColor};
      background-color: ${customType === 'createItem'
        ? themes[theme].secondaryColor
        : themes[theme].primaryColor};
      border-radius: 5px;
      font-family: Arial, Helvetica, sans-serif;
      color: ${themes[theme].fontColor};
      padding: 5px 10px;
      width: ${sizes[size].width};
      height: ${sizes[size].height};
      ${isCreateItem
        ? css`
            strong {
              filter: invert(100%);
            }
          `
        : css`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
      &:hover {
        transition: all 0.4s ease;
        background-color: #c18e47;
      }
    `;
  }}
`;
