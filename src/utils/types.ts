import { NextPageContext } from 'next';

import { RootStore } from '../stores';

export interface NextPageContextWithStore extends NextPageContext {
  mobxStore: RootStore;
}

export interface FunctionalPage<P = {}> extends React.FC<P> {
  getInitialProps?: (ctx: NextPageContextWithStore) => P;
}

export interface AsyncFunctionalPage<P = {}> extends React.FC<P> {
  getInitialProps?: (ctx: NextPageContext) => Promise<P>;
}
