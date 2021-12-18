import { colors } from '@utils/colors';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import AppTopNav from './AppTopNav';

const Container = styled.div`
  width: 100vw;
  min-height: ${(props: { viewHeight: number }) => `${props.viewHeight}px`};
  background: url('/images/background.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  padding: 0 40px;
  width: 100%;
  height: 50px;
  backdrop-filter: blur(25px);
`;

const Main = styled.main`
  padding-top: 50px;
  min-height: 100%;
`;

interface LayoutProps {
  renderLeftNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [viewHeight, setViewHeight] = useState(0);

  useEffect(() => {
    setViewHeight(window.innerHeight);
  }, []);

  return (
    <Container viewHeight={viewHeight}>
      <Header>
        <AppTopNav />
      </Header>
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
