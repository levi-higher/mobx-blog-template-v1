import _ from 'lodash';
import { NextPage } from 'next';
import Router from 'next/router';
import nookie from 'nookies';

import { AsyncFunctionalPage, NextPageContextWithStore } from './types';

interface AuthWrapperProps {}

function withAuthSync(Component: NextPage) {
  const AuthWrapper: AsyncFunctionalPage<AuthWrapperProps> = () => {
    return <Component />;
  };

  AuthWrapper.getInitialProps = async (ctx: NextPageContextWithStore) => {
    const { accessToken } = nookie.get(ctx);

    if (_.isUndefined(accessToken)) {
      redirectTo('/user/signin', ctx);
    } else {
      const result = await ctx.mobxStore.userStore.getProfile();

      if (!result) {
        nookie.destroy(ctx, 'accessToken');
        redirectTo('/user/signin', ctx);
      }
    }

    const componentProps =
      Component.getInitialProps && (await Component.getInitialProps({ ...ctx }));

    return {
      ...componentProps,
    };
  };

  return AuthWrapper;
}

export { withAuthSync };

function redirectTo(path: string, ctx: NextPageContextWithStore) {
  if (typeof window === 'undefined') {
    ctx.res.writeHead(302, { Location: path });
    ctx.res.end();
  } else {
    Router.push(path);
  }
}
