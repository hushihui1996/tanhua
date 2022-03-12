import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/account/login'; //登陆
import Dome from './pages/Dome'; //测试
import UserInfo from './pages/account/userInfo'; //完善客户信息
import Tabbar from './tabbar';
import {inject, observer} from 'mobx-react';
const Stack = createStackNavigator();

@inject('RootStore') // 注入 用来获取 全局数据的
@observer //  当全局发生改变了  组件的重新渲染 从而显示最新的数据
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialRouteName: this.props.RootStore.tokey ? 'Tabbar' : 'Login',
    };
  }
  render() {
    const {initialRouteName} = this.state;
    console.log(initialRouteName, 'initialRouteName');
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName={initialRouteName}>
          {/* 调试界面 */}
          <Stack.Screen name="Dome" component={Dome} />
          {/* tab栏 */}
          <Stack.Screen name="Tabbar" component={Tabbar} />
          {/* 登陆界面 */}
          <Stack.Screen name="Login" component={Login} />
          {/* 完善客户信息 */}
          <Stack.Screen name="UserInfo" component={UserInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Nav;
