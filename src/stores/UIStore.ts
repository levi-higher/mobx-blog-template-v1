import _ from 'lodash';
import { makeAutoObservable } from 'mobx';

export interface UIStoreInterface {}

class UIStore implements UIStoreInterface {
  constructor(initialiData: Partial<UIStoreInterface> = {}) {
    makeAutoObservable(this);
  }
}

export default UIStore;
