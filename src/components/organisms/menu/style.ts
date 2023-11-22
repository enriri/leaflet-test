import styled from 'styled-components';
import { MenuSection } from '../../molecules/menuSection';
import { ActionMenu } from '../../molecules/actionMenu';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const SideMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MenuSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: #333333;
  padding: 5px;
  border-radius: 5px 0px 0px 5px;
`;

export const ActionMapWrapper = styled.div``;

export const StyledMenuSection = styled(MenuSection)`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StyledActionMenu = styled(ActionMenu)`
  padding: 10px;
`;
