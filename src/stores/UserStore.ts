import _ from 'lodash';
import { observable, runInAction } from 'mobx';

export interface UserStoreInterface {
  isLoggedIn: boolean;
  userProfile?: UserProfileInterface;
  login(): boolean;
  getProfile(): boolean;
}

export interface UserProfileInterface {
  pk: number;
  name: string;
  email: string;
  phone: string;
}

const DEFAULT_USER: UserProfileInterface = {
  pk: null,
  name: null,
  email: null,
  phone: null,
};

class UserStore implements UserStoreInterface {
  @observable isLoggedIn = false;
  @observable userProfile = _.clone(DEFAULT_USER);

  constructor(initialiData: Partial<UserStoreInterface> = {}) {
    if (initialiData.userProfile) {
      this.userProfile = initialiData.userProfile;
    }
  }

  public login() {
    runInAction(() => {
      this.isLoggedIn = true;
    });

    return true;
  }

  public getProfile() {
    runInAction(() => {
      this.userProfile.pk = 1;
    });

    return true;
  }
}

export default UserStore;
