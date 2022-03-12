import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {pxToDp} from '../../../utils/stylesKits';
import Svg from '../../../components/Svg/index';
import Picker from 'react-native-picker';
import {Slider} from 'react-native-elements';
import CityJson from '../../../assets/json/city.json';
import THButtom from '../../../components/THButtom/indes';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(JSON.stringify(this.props.params));
  }
  //选择头像框事件
  grenderClick = gender => {
    this.setState({gender});
  };
  //选择日期
  chooeseLoatLogin = () => {
    Picker.init({
      pickerData: ['15分钟', '一小时', '一天', '不限期限'],
      selectedValue: [this.state.lastLogin],
      wheelFlex: [1, 0, 0], // 显示省和市
      pickerConfirmBtnText: '确定',
      pickerCancelBtnText: '取消',
      pickerTitleText: '选择时间',
      onPickerConfirm: data => {
        this.setState({
          lastLogin: data[0],
        });
      },
    });
    Picker.show();
  };
  //居住地选择
  chooeseCityn = () => {
    Picker.init({
      pickerData: CityJson,
      selectedValue: ['北京', '北京'],
      wheelFlex: [1, 1, 0], // 显示省和市
      pickerConfirmBtnText: '确定',
      pickerCancelBtnText: '取消',
      pickerTitleText: '选择城市',
      onPickerConfirm: data => {
        // data =  [广东，广州，天河]
        this.setState({
          city: data[1],
        });
      },
    });
    Picker.show();
  };
  //学历
  chooeseEducation = () => {
    Picker.init({
      pickerData: [
        '博士后',
        '博士',
        '硕士',
        '本科',
        '大专',
        '高中',
        '留学生',
        '其他',
      ],
      selectedValue: ['其他'],
      wheelFlex: [1, 0, 0],
      pickerConfirmBtnText: '确定',
      pickerCancelBtnText: '取消',
      pickerTitleText: '选择城市',
      onPickerConfirm: data => {
        this.setState({
          education: data[0],
        });
      },
    });
    Picker.show();
  };
  //提交参数
  headerSubmit = () => {
    this.props.headerSubmitFilter(this.state);
    this.props.clearOverlay();
  };
  render(h) {
    const {gender, lastLogin, distance, city, education} = this.state;
    return (
      <View style={{width: '100%', height: '100%', position: 'relative'}}>
        <View
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '40%',
          }}>
          <Text
            onPress={this.props.clearOverlay}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            height: '60%',
            backgroundColor: '#fff',
          }}>
          {/* 标题 */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text />
            <Text style={{fontSize: pxToDp(24)}}>筛选</Text>
            <TouchableOpacity onPress={this.props.clearOverlay}>
              <Text
                style={{
                  fontFamily: 'iconfont',
                  //   color: '#666',
                  fontSize: pxToDp(24),
                  marginRight: pxToDp(15),
                }}>
                &#xe8e7;
              </Text>
            </TouchableOpacity>
          </View>
          {/* 图片开始 */}
          <View
            style={{
              padding: pxToDp(10),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: pxToDp(14)}}>性别：</Text>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                width: '60%',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                style={{
                  width: pxToDp(40),
                  height: pxToDp(40),
                  borderRadius: pxToDp(30),
                  backgroundColor: gender === '男' ? '#2db3f8' : '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={this.grenderClick.bind(this, '男')}>
                <Svg icon="nanxingrenwu" size="34" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: pxToDp(40),
                  height: pxToDp(40),
                  borderRadius: pxToDp(30),
                  backgroundColor: gender === '女' ? '#2db3f8' : '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={this.grenderClick.bind(this, '女')}>
                <Svg icon="nvxingrenwu" size="34" />
              </TouchableOpacity>
            </View>
          </View>
          {/* 图片结束 */}
          {/* 近期登陆时间 */}
          <View
            style={{
              padding: pxToDp(10),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: pxToDp(14), width: '30%'}}>
              近期登陆时间：
            </Text>
            <Text
              onPress={this.chooeseLoatLogin}
              style={{fontSize: pxToDp(14)}}>
              {lastLogin || '请选择'}
            </Text>
          </View>
          {/* 距离 */}
          <View
            style={{
              padding: pxToDp(10),
            }}>
            <Text style={{fontSize: pxToDp(14)}}>距离：{distance} KM</Text>
            <Slider
              value={Number(distance)}
              onValueChange={distance => {
                this.setState({distance});
              }}
              maximumValue={10}
              minimumValue={0}
              step={0.5}
              style={{marginTop: pxToDp(10)}}
            />
          </View>
          {/* 居住地 */}
          <View
            style={{
              padding: pxToDp(10),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: pxToDp(14), width: '20%'}}>居住地：</Text>
            <Text onPress={this.chooeseCityn} style={{fontSize: pxToDp(14)}}>
              {city || '请选择'}
            </Text>
          </View>
          {/* 学历 */}
          <View
            style={{
              padding: pxToDp(10),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: pxToDp(14), width: '15%'}}>学历：</Text>
            <Text
              onPress={this.chooeseEducation}
              style={{fontSize: pxToDp(14)}}>
              {education || '请选择'}
            </Text>
          </View>
          {/* 按钮 */}
          <View>
            <THButtom
              onPress={this.headerSubmit}
              style={{
                height: pxToDp(35),
                width: pxToDp(120),
                borderRadius: pxToDp(15),
                alignSelf: 'center',
                marginTop: pxToDp(20),
              }}>
              确定
            </THButtom>
          </View>
        </View>
      </View>
    );
  }
}
export default index;
