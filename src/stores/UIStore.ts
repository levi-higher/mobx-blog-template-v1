import _ from 'lodash';
import { makeAutoObservable, observable, runInAction } from 'mobx';

export interface UIStoreInterface {
  isCardEffectActive: boolean;
  cardGradientValue: number;
  handleEnterCard(initialValue: number): void;
  handleLeaveCard(initialValue: number): void;
  setCardEffectStatus(value: boolean): void;
}

class UIStore implements UIStoreInterface {
  @observable isCardEffectActive = false;
  @observable cardGradientValue = 28;

  constructor(initialiData: Partial<UIStoreInterface> = {}) {
    makeAutoObservable(this);
  }

  public handleEnterCard(initialValue: number) {
    if (!this.isCardEffectActive) return;

    const value = initialValue + 1;

    if (value < 88) {
      runInAction(() => {
        this.cardGradientValue = value;
      });

      window.requestAnimationFrame(() => this.handleEnterCard(value));
    } else {
      window.requestAnimationFrame(() => this.handleLeaveCard(value));
    }
  }

  public handleLeaveCard(initialValue: number) {
    if (!this.isCardEffectActive) return;

    const value = initialValue - 3;

    if (value > 28) {
      runInAction(() => {
        this.cardGradientValue = value;
      });

      window.requestAnimationFrame(() => this.handleLeaveCard(value));
    } else {
      window.requestAnimationFrame(() => this.handleEnterCard(value));
    }
  }

  public setCardEffectStatus(value: boolean) {
    runInAction(() => {
      this.isCardEffectActive = value;
    });
  }
}

export default UIStore;
