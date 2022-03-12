import React from 'react';
import {View, Text} from 'react-native';
import JMessage from 'jmessage-react-plugin';
class App extends React.Component {
  componentDidMount() {
    JMessage.init({
      appkey: 'ebb2ed8aade7aa37d4e55bd7',
      isOpenMessageRoaming: true,
      isProduction: false,
      channel: '',
    });

    JMessage.login(
      {
        username: '19965204882',
        password: '	qwer',
      },
      res => {
        console.log('登录成功');
        console.log(res);
      },
      err => {
        console.log('登录失败');
        console.log(err);
      },
    );
  }
  render() {
    return (
      <View>
        <Text>goods</Text>
      </View>
    );
  }
}
export default App;
