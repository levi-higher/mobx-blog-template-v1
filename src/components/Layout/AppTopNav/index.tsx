import _ from 'lodash';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import NavItem, { NavTextSize } from './NavItem';

interface NavItemsInterface {
  name: string;
  pathName?: string;
  size?: NavTextSize;
}

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const InnerWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;

  &:last-child {
    justify-content: flex-end;
  }
`;

interface AppTopNavProps {}

const AppTopNav: React.FC<AppTopNavProps> = () => {
  const router = useRouter();

  const NAV_ITEMS_MAPPING: NavItemsInterface[][] = [
    [
      {
        name: `LeviTamplate-v1`,
        pathName: '/',
      },
      {
        name: `CoverLetter`,
        pathName: '/coverletter',
      },
      {
        name: `Feed`,
        pathName: '/feed',
      },
    ],
    [
      {
        name: 'Notice',
      },
      {
        name: 'Guest',
      },
    ],
  ];

  function handleRenderItems() {
    return _.map(NAV_ITEMS_MAPPING, (items, itemsIndex) => {
      return (
        <InnerWrapper key={`appTopNavItems_${itemsIndex}`}>
          {_.map(items, (item, itemIndex) => (
            <NavItem
              key={`appTopNavItem_${itemIndex}`}
              pathName={item.pathName}
              size={item.size || NavTextSize.MIDDLE}
              onClick={() => item.pathName && router.push(item.pathName)}
            >
              {item.name}
            </NavItem>
          ))}
        </InnerWrapper>
      );
    });
  }

  return <Container>{handleRenderItems()}</Container>;
};

export default AppTopNav;
