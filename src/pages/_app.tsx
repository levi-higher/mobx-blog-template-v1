import '@babel/polyfill';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import _ from 'lodash';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import moment from 'moment';
import { NextComponentType } from 'next';
import App, { AppContext } from 'next/app';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

import '../../public/styles/default.css';
import initializeStore, { RootStore } from '../stores';
import { NextPageContextWithStore } from '../utils/types';

configure({
  enforceActions: 'observed',
});

moment.locale('ko');

const GlobalStyle = createGlobalStyle`
  p, ul, ol, dl {
    margin-bottom: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: 100%;
  }
`;

interface MyAppProps {
  initialMobxState: RootStore;
  Component?: NextComponentType<NextPageContextWithStore>;
  pageProps: any;
}

interface AsyncFunctionalAppPage<P = {}> extends React.FC<P> {
  getInitialProps?: (ctx: MyAppContext) => Promise<P>;
}

interface MyAppContext extends AppContext {
  ctx: NextPageContextWithStore;
}

const MyApp: AsyncFunctionalAppPage<MyAppProps> = (props) => {
  let mobxStore: RootStore;
  const isServer = typeof window === 'undefined';
  mobxStore = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);

  const { Component, pageProps } = props;

  return (
    <Provider {...mobxStore}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
};

MyApp.getInitialProps = async (appContext: MyAppContext): Promise<MyAppProps> => {
  const mobxStore = initializeStore();
  appContext.ctx.mobxStore = mobxStore;
  let appProps;
  if (_.isFunction(App.getInitialProps)) {
    appProps = await App.getInitialProps(appContext);
  }
  return {
    ...appProps,
    initialMobxState: mobxStore,
  };
};

export default MyApp;
