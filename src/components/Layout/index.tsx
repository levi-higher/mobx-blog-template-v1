import { useEffect, useState } from 'react';
import styled from 'styled-components';

import AppTopNav from './AppTopNav';

const Container = styled.div`
  width: 100vw;
  min-height: ${(props: { viewHeight: number }) => `${props.viewHeight}px`};
`;

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  background: url('/images/background.png') center center / cover no-repeat !important;
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
      <BackgroundImage />
      <Header>
        <AppTopNav />
      </Header>
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
