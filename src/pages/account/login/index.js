import React, {Component} from 'react';
import {
  View,
  Image,
  StatusBar,
  Text,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import {pxToDp} from '../../../utils/stylesKits';
import {Input} from 'react-native-elements';
import validator from '../../../utils/validator';
import THButtom from '../../../components/THButtom/indes';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
// import reques from '../../../utils/request';
// import {ACCOUNT_LOGIN} from '../../../utils/pathMap';
import Toast from '../../../utils/Toast';
import {inject, observer} from 'mobx-react';
@inject('RootStore') // 注入 用来获取 全局数据的
@observer //  当全局发生改变了  组件的重新渲染 从而显示最新的数据
class index extends Component {
  state = {
    //手机号码值
    phoneNumber: '19965204881',
    //手机号码校验
    phoneValid: true,
    //登陆界面切换
    showLogin: true,
    //验证码值
    vcodeText: '',
    //重新获取按钮
    btnText: '重新获取',
    //是否在验证码倒计时中
    countTimeMark: false,
  };
  //输入事件
  phoneNumberChange = phoneNumber => {
    this.setState({phoneNumber});
    console.log(phoneNumber);
  };
  //点击键盘完成按钮事件&&获取验证码
  phoneNumberSubmitEditing = async () => {
    const {phoneNumber, countTimeMark} = this.state;
    const phoneValid = validator.validatePhone(phoneNumber);
    if (countTimeMark) {
      return;
    }
    if (!phoneValid) {
      this.setState({phoneValid});
      return;
    }
    Toast.showLoading('接口请求中');
    //模拟请求接口
    let key = 2;
    let time = setInterval(() => {
      key--;
      if (key === 0) {
        Toast.hideLoading();
        this.setState({showLogin: false});
        clearInterval(time);
        this.countTime();
      }
    }, 1000);
    // const req = await reques.post(ACCOUNT_LOGIN, {phone: phoneNumber});
    // console.log(req);
  };
  //开启定时器
  countTime = () => {
    let seconds = 10;
    this.setState({btnText: `重新获取(${seconds})`});
    this.setState({countTimeMark: true});
    let timeId = setInterval(() => {
      seconds--;
      this.setState({btnText: `重新获取(${seconds})`});
      if (seconds === 0) {
        clearInterval(timeId);
        this.setState({btnText: '重新获取'});
        this.setState({countTimeMark: false});
      }
    }, 1000);
  };

  //渲染登陆页面
  renderLogin = () => {
    const {phoneNumber, phoneValid} = this.state;
    return (
      <View>
        {/* title文字 */}
        <View>
          <Text
            style={{fontSize: pxToDp(25), color: '#888', fontWeight: 'bold'}}>
            手机号登陆注册
          </Text>
        </View>
        {/* 驶入框 */}
        <View style={{marginTop: pxToDp(30)}}>
          <Input
            placeholder="请输入手机号码"
            keyboardType="phone-pad"
            maxLength={11}
            value={phoneNumber}
            onChangeText={this.phoneNumberChange}
            onSubmitEditing={this.phoneNumberSubmitEditing}
            errorMessage={phoneValid ? '' : '手机号码格式不正确'}
            inputStyle={{color: '#333'}}
            leftIcon={{
              type: 'font-awesome',
              name: 'phone',
              color: '#ccc',
              size: pxToDp(20),
            }}
          />
        </View>
        {/* 按钮 */}
        <View style={{marginTop: pxToDp(15)}}>
          <View style={{width: '85%', height: pxToDp(40), alignSelf: 'center'}}>
            <THButtom
              onPress={this.phoneNumberSubmitEditing}
              style={{borderRadius: pxToDp(20)}}>
              获取验证码
            </THButtom>
          </View>
        </View>
      </View>
    );
  };
  //手机验证码输入事件
  onVcodeChangeText = vcodeText => {
    this.setState({vcodeText});
    if (vcodeText.length === 6) {
      this.getLogin();
    }
  };
  //模拟请求登陆接口
  getLogin = () => {
    //存储全局数据
    this.props.RootStore.setMobx(
      this.state.phoneNumber,
      '12345678901234567890',
      this.state.phoneNumber + '20200307',
    );
    //存储缓存
    AsyncStorage.setItem(
      'userInfo',
      JSON.stringify({
        mobile: this.state.phoneNumber,
        tokey: '12345678901234567890',
        userId: this.state.phoneNumber + '20200307',
      }),
    );
    //模拟请求接口
    Toast.showLoading('接口请求中');
    let key = 2;
    let time = setInterval(() => {
      key--;
      if (key === 0) {
        let isNew = true;
        Toast.hideLoading();
        clearInterval(time);
        //判断是新用户还是老用户
        if (isNew) {
          //新用户 userInfo
          this.props.navigation.navigate('UserInfo');
        } else {
          //老用户
          this.props.navigation.navigate('Tabbar');
        }
      }
    }, 1000);
  };
  //重新获取验证码
  repGetVcode = () => {
    this.phoneNumberSubmitEditing();
  };
  // 验证码输入完成事件
  vcodeSubmitEditin = () => {
    const {phoneNumber, vcodeText} = this.state;
    if (vcodeText.length !== 6) {
      Toast.message('验证码不正确', 2000, 'center');
      return;
    }
    this.getLogin();
  };
  //渲染填写验证码页面
  renderVCode = () => {
    const {phoneNumber, vcodeText, btnText, countTimeMark} = this.state;
    const CELL_COUNT = 6;
    return (
      <View>
        <View>
          <Text
            style={{fontSize: pxToDp(25), fontWeight: 'bold', color: '#888'}}>
            请输入6位验证码
          </Text>
        </View>
        <View style={{marginTop: pxToDp(15)}}>
          <Text style={{color: '#888', fontSize: pxToDp(14)}}>
            已发到：86+{phoneNumber}
          </Text>
        </View>
        {/* 验证码输入框 */}
        <View>
          <CodeField
            value={vcodeText}
            onSubmitEditing={this.vcodeSubmitEditin}
            onChangeText={this.onVcodeChangeText}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFiledRoot}
            keyboardType="number-pad"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        {/* 按钮 */}
        <View style={{marginTop: pxToDp(15)}}>
          <View style={{width: '85%', height: 40, alignSelf: 'center'}}>
            <THButtom
              disabled={countTimeMark}
              onPress={this.repGetVcode}
              style={{borderRadius: pxToDp(20)}}>
              {btnText}
            </THButtom>
          </View>
        </View>
      </View>
    );
  };
  render(h) {
    const {showLogin} = this.state;
    return (
      <View>
        {/* 头部 */}
        <StatusBar backgroundColor="transparent" translucent={true} />
        <Image
          style={{width: '100%', height: pxToDp(220)}}
          source={require('../../../imges/login.jpeg')}
        />
        {/* 内容 */}
        <View style={{padding: pxToDp(20)}}>
          {showLogin ? this.renderLogin() : this.renderVCode()}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFiledRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    color: '#7d53ea',
  },
  focusCell: {
    borderColor: '#7d53ea',
  },
});

export default index;
