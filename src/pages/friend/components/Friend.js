import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Svg from '../../../components/Svg';
import {pxToDp} from '../../../utils/stylesKits';
class index extends Component {
  render(h) {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '80%',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: pxToDp(50),
              height: pxToDp(50),
              width: pxToDp(50),
            }}>
            <Svg icon="renshu" size="34" color="#ffffff" />
          </View>
          <Text
            style={{
              color: '#ffff9a',
              fontSize: pxToDp(16),
              marginTop: pxToDp(5),
            }}>
            找朋友
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#2db3f8',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: pxToDp(50),
              height: pxToDp(50),
              width: pxToDp(50),
            }}>
            <Svg icon="dingwei" size="34" color="#ffffff" />
          </View>
          <Text
            style={{
              color: '#ffff9a',
              fontSize: pxToDp(16),
              marginTop: pxToDp(5),
            }}>
            搜附近
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#ecc768',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: pxToDp(50),
              height: pxToDp(50),
              width: pxToDp(50),
            }}>
            <Svg icon="danao" size="34" color="#ffffff" />
          </View>
          <Text
            style={{
              color: '#ffff9a',
              fontSize: pxToDp(16),
              marginTop: pxToDp(5),
            }}>
            测灵魂
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default index;
