import { colors } from '@utils/colors';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

export enum NavTextSize {
  SMALL = 0,
  MIDDLE = 1,
  LARGE = 2,
}

const Container = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 10px;
  height: 35px;
  cursor: pointer;
`;

const NavItemText = styled.p`
  z-index: 1000;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Crimson Pro', serif;
  font-size: 16px;

  ${(props: NavItemProps) =>
    props.size === NavTextSize.LARGE &&
    css`
      font-size: 26px;
    `};

  ${(props: NavItemProps) =>
    props.isActive &&
    css`
      color: ${colors.white};
    `};
`;

interface NavItemProps {
  isActive?: boolean;
  size?: NavTextSize;
  onClick?(): void;
  pathname?: string;
}

const NavItem: React.FC<NavItemProps> = ({ children, size, onClick, pathname }) => {
  const router = useRouter();

  return (
    <Container onClick={onClick}>
      <NavItemText isActive={router.asPath === pathname} size={size}>
        {children}
      </NavItemText>
    </Container>
  );
};

export default NavItem;
