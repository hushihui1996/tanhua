import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import SvgUri from 'react-native-svg-uri';
import Friend from './pages/friend/home';
import Group from './pages/group/home';
import Message from './pages/message/home';
import My from './pages/my/home';
import TabNavigator from 'react-native-tab-navigator';
// import SvgData from './res/svg';
import Svg from './components/Svg/index';
import {pxToDp} from './utils/stylesKits';
const dataSource = [
  {
    icon: 'jiaoyouOff',
    selectedIcon: 'jiaoyouOn',
    tabPage: 'Friend',
    tabName: '交友',
    badge: 0,
    component: Friend,
  },
  {
    icon: 'pengyouquanOff',
    selectedIcon: 'pengyouquanOn',
    tabPage: 'Group',
    tabName: '圈子',
    badge: 0,
    component: Group,
  },
  {
    icon: 'xiaoxiOff',
    selectedIcon: 'xiaoxiOn',
    tabPage: 'Message',
    tabName: '消息',
    badge: 5,
    component: Message,
  },
  {
    icon: 'wodeOff',
    selectedIcon: 'wodeOn',
    tabPage: 'My',
    tabName: '我的',
    badge: 0,
    component: My,
  },
  ,
];

class Index extends Component {
  state = {
    selectedTab: 'Friend',
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <TabNavigator tabBarStyle={{height:pxToDp(45)}}>
          {dataSource.map((v, i) => {
            return (
              <TabNavigator.Item
                key={i}
                selected={this.state.selectedTab === v.tabPage}
                // title="wqewqeqw"
                title={v.tabName}
                tabStyle={{justifyContent: 'center'}}
                titleStyle={{color: '#999999', fontSize: pxToDp(13)}}
                selectedTitleStyle={{color: '#c863b5'}}
                renderIcon={() => <Svg icon={v.icon} size="23" />}
                renderSelectedIcon={() => (
                  <Svg icon={v.selectedIcon} size="23" />
                )}
                badgeText={v.badge}
                onPress={() => this.setState({selectedTab: v.tabPage})}>
                <v.component />
                {/* <Text>{v.tabName}</Text> */}
              </TabNavigator.Item>
            );
          })}
        </TabNavigator>
      </View>
    );
  }
}
export default Index;
