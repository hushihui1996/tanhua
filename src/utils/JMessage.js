import JMessage from 'jmessage-react-plugin';

export default {
  //极光初始化
  init() {
    JMessage.init({
      appkey: 'ebb2ed8aade7aa37d4e55bd7',
      isOpenMessageRoaming: true,
      isProduction: false,
      channel: '',
    });
  },
  //注册
  register(username, password) {
    return new Promise((resolve, reject) => {
      JMessage.register(
        {
          username,
          password,
        },
        resolve,
        reject,
      );
    });
  },
  //登陆
  login(username, password) {
    return new Promise((resolve, reject) => {
      JMessage.login(
        {
          username,
          password,
        },
        resolve,
        reject,
      );
    });
  },
};
