import { colors } from '@utils/colors';
import { useRouter } from 'next/router';
import styled, { css, keyframes } from 'styled-components';

export enum NavItemSize {
  SMALL = 0,
  MIDDLE = 1,
  LARGE = 2,
}

const NavItemKeyframe = keyframes`
    0% {
        transform: rotate(0deg) translate(0, -200px);
        width: 3px;
        height: 3px;
    }

    15% {
        transform: rotate(0deg) translate(0, -30px);
        width: 3px;
        height: 3px;
    }

    18% {
        transform: rotate(0deg) translate(0, 0);
        width: 3px;
        height: 3px;
    }

    21% {
        transform: rotate(0deg) translate(0, -30px);
        width: 3px;
        height: 3px;
    }

    24% {
        transform: rotate(0deg) translate(0, 0);
        width: 3px;
        height: 3px;
    }

    27% {
        transform: rotate(0deg) translate(0, -30px);
        width: 3px;
        height: 3px;
    }

    40% {
        transform: rotate(0deg) translate(0, -30px);
        width: 3px;
        height: 3px;
    }

    45% {
        transform: rotate(0deg) translate(-30px, -20px);
        width: 3px;
        height: 3px;
    }

    60% {
        transform: rotate(0deg) translate(-30px, -20px);
        width: 3px;
        height: 3px;
    }

    65% {
        transform: rotate(0deg) translate(30px, -15px);
        width: 3px;
        height: 3px;
    }

    80% {
        transform: rotate(0deg) translate(30px, -15px);
        width: 3px;
        height: 3px;
    }

    85% {
        transform: rotate(160deg) translate(25px, -25px);
        width: 3px;
        height: 3px;
    }

    88% {
        transform: rotate(160deg) translate(25px, -25px);
        width: 1px;
        height: 1px;
    }

    91% {
        transform: rotate(160deg) translate(25px, -25px);
        width: 1px;
        height: 1px;
    }

    94% {
        transform: rotate(360deg) translate(0, 0);
        width: 1px;
        height: 1px;
    }

    100% {
        transform: rotate(360deg) translate(0, 0);
        width: 100%;
        height: 100%;
    }
`;

const ContainerBorder = styled.span`
  display: flex;
  position: absolute;
  justify-self: flex-start;
  width: 100%;
  height: 100%;
  animation-duration: 3.4s;
  animation-fill-mode: forwards;

  ${(props: NavItemProps) =>
    props.isActive &&
    css`
      border: 1px solid #ffffff;
      animation-name: ${NavItemKeyframe};
    `};
`;

const Container = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 10px;
  padding: 0 15px;
  height: 35px;
  cursor: pointer;
`;

const NavItemText = styled.p`
  z-index: 1000;
  color: ${colors.white};

  ${(props: NavItemProps) =>
    props.size === NavItemSize.LARGE &&
    css`
      font-size: 20px;
      font-family: 'Bakbak One', cursive;
      letter-spacing: -1px;
    `};
`;

interface NavItemProps {
  isActive?: boolean;
  size?: NavItemSize;
  onClick?(): void;
  pathname?: string;
}

const NavItem: React.FC<NavItemProps> = ({ children, size, onClick, pathname }) => {
  const router = useRouter();

  return (
    <Container onClick={onClick}>
      <ContainerBorder isActive={size === NavItemSize.LARGE ? false : router.asPath === pathname} />
      <NavItemText size={size}>{children}</NavItemText>
    </Container>
  );
};

export default NavItem;
