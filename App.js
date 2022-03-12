import React, {Component} from 'react';
import {View, AsyncStorage} from 'react-native';
import Nav from './src/Nav';
import Geo from './src/utils/gaode';
import RootStore from './src/mobx/index';
import {Provider} from 'mobx-react';
import JMessage from './src/utils/JMessage';
class App extends Component {
  state = {
    isInitGeo: false,
  };
  async componentDidMount() {
    const strUserInfo = await AsyncStorage.getItem('userInfo');
    console.log(strUserInfo + '111111');
    const userInfo = strUserInfo ? JSON.parse(strUserInfo) : {};
    console.log(userInfo);
    if (userInfo.tokey) {
      RootStore.setMobx(userInfo.mobile, userInfo.tokey, userInfo.userId);
      await Geo.initGeo();
    }
    this.setState({isInitGeo: true});
    JMessage.init();
  }
  render(h) {
    return (
      <View style={{flex: 1}}>
        <Provider RootStore={RootStore}>
          {this.state.isInitGeo ? <Nav /> : <></>}
        </Provider>
      </View>
    );
  }
}
export default App;
