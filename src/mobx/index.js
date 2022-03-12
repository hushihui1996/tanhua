import {observable, action} from 'mobx';

class RootStore {
  //手机号码
  @observable mobile = '19965204881';
  //用户token
  @observable token = '';
  //用户唯一id
  @observable userId = '20200307';
  @action setMobx(mobile, tokey, userId) {
    this.mobile = mobile;
    this.tokey = tokey;
    this.userId = userId;
  }
}

export default new RootStore();
