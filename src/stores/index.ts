import { enableStaticRendering, MobXProviderContext } from 'mobx-react';
import React from 'react';

import UIStore, { UIStoreInterface } from './UIStore';
import UserStore, { UserStoreInterface } from './UserStore';

const isServer = typeof window === 'undefined';
enableStaticRendering(isServer);

export interface RootStore {
  userStore: UserStoreInterface;
  uiStore: UIStoreInterface;
}

let store: RootStore;

export default function initializeStore(initialData: Partial<RootStore> = {}) {
  if (isServer) {
    store = {
      userStore: new UserStore(initialData.userStore),
      uiStore: new UIStore(),
    };
    return store;
  }
  if (!store) {
    store = {
      userStore: new UserStore(initialData.userStore),
      uiStore: new UIStore(),
    };
  }

  return store;
}

export const useStores = () => {
  return React.useContext(MobXProviderContext as unknown as React.Context<RootStore>);
};
