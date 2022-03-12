import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {pxToDp} from '../../../utils/stylesKits';
class index extends Component {
  state = {
    PrefectGirl: {
      nick_name: '若只如初见',
      age: '23',
      marry: '单身',
      xueli: '大专',
      faetValue: '99',
      header:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ffd%2Ff1%2Fda%2Ffdf1dacb8ff0b8f13ed29bcbee42f328.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649483413&t=be5ae07b437d860b5a7758c4f3d7f2d5',
    },
  };
  render(h) {
    const {PrefectGirl} = this.state;
    return (
      <View
        style={{
          flexDirection: 'row',
          borderWidth: pxToDp(5),
          borderColor: '#eee',
        }}>
        {/* 左边 */}
        <View style={{position: 'relative'}}>
          <Image
            source={{uri: PrefectGirl.header}}
            style={{width: pxToDp(120), height: pxToDp(120)}}
          />
          <View
            style={{
              position: 'absolute',
              left: 0,
              bottom: pxToDp(10),
              width: pxToDp(80),
              lineHeight: pxToDp(30),
              backgroundColor: '#b564bf',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: pxToDp(10),
            }}>
            <Text style={{fontSize: pxToDp(16), color: '#fff'}}>今日佳人</Text>
          </View>
        </View>
        {/* 右边 */}
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 2, justifyContent: 'space-around'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#555', fontSize: pxToDp(14)}} t>
                {PrefectGirl.nick_name}
              </Text>
              <Text
                style={{
                  fontFamily: 'iconfont',
                  color: 'red',
                  fontSize: pxToDp(14),
                  paddingLeft: pxToDp(5),
                }}>
                &#xe68b;
              </Text>
              <Text
                style={{
                  color: '#555',
                  paddingLeft: pxToDp(5),
                  fontSize: pxToDp(14),
                }}>
                {PrefectGirl.age}岁
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#555', fontSize: pxToDp(14)}}>
                {PrefectGirl.marry}
              </Text>
              <Text
                style={{
                  color: '#555',
                  paddingLeft: pxToDp(5),
                  fontSize: pxToDp(14),
                }}>
                |
              </Text>
              <Text
                style={{
                  color: '#555',
                  paddingLeft: pxToDp(5),
                  fontSize: pxToDp(14),
                }}>
                {PrefectGirl.xueli}
              </Text>
              <Text
                style={{
                  color: '#555',
                  paddingLeft: pxToDp(5),
                  fontSize: pxToDp(14),
                }}>
                |
              </Text>
              <Text
                style={{
                  color: '#555',
                  paddingLeft: pxToDp(5),
                  fontSize: pxToDp(14),
                }}>
                年龄相仿
              </Text>
            </View>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'iconfont',
                  color: 'red',
                  fontSize: pxToDp(50),
                }}>
                &#xe8c3;
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(13),
                  fontWeight: 'bold',
                  position: 'absolute',
                  color: '#fff',
                }}>
                {PrefectGirl.faetValue}
              </Text>
            </View>
            <Text style={{color: 'red', fontSize: pxToDp(13)}}>缘分值</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default index;
