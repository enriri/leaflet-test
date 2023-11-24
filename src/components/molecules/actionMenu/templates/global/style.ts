import styled from 'styled-components';
import { Form } from '../../../../atoms';

export const Container = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const Title = styled.h2`
  margin-top: 0px;
  font-weight: normal;
`;

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
