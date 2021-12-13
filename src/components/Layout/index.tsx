import { colors } from '@utils/colors';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import AppTopNav from './AppTopNav';

const Container = styled.div`
  width: 100vw;
  height: ${(props: { viewHeight: number }) => `${props.viewHeight}px`};
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  padding: 0 10px;
  width: 100%;
  height: 60px;
  background: ${colors.point};
`;

const Main = styled.main`
  padding-top: 70px;
  min-height: 100%;
  background: ${colors.point};
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
