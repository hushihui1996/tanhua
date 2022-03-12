import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {pxToDp} from '../../../utils/stylesKits';
import Svg from '../../../components/Svg';
import {Input} from 'react-native-elements';
import DateTimePicker from '../../../components/DateTimePicker';
import Geo from '../../../utils/gaode';
import Picker from 'react-native-picker';
import CityJson from '../../../assets/json/city.json';
import THButtom from '../../../components/THButtom/indes';
import Toast from '../../../utils/Toast';
import ImagePicker from 'react-native-image-crop-picker';
import {Overlay} from 'teaset';
import {inject, observer} from 'mobx-react';
import JMessage from '../../../utils/JMessage';
@inject('RootStore') // 注入 用来获取 全局数据的
@observer //  当全局发生改变了  组件的重新渲染 从而显示最新的数据
class index extends Component {
  state = {
    //名称
    nickname: '',
    //性别
    gender: '男',
    //生日
    birthday: '',
    //城市
    city: '',
    //头像地址
    header: '',
    //经度
    lng: '',
    //纬度
    lat: '',
    //详细地址
    address: '',
  };

  //获取定位信息
  async componentDidMount() {
    const res = await Geo.getCityByLocation();
    const address = res.regeocode.formatted_address;
    const city = res.regeocode.addressComponent.city.replace('市', '');
    this.setState({address, city});
  }
  //选择位置
  getAddress = () => {
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
  //选择头像框事件
  grenderClick = gender => {
    this.setState({gender});
  };
  //点击设置按钮
  chooeseHeadImg = () => {
    const {nickname, city, birthday} = this.state;
    if (!nickname) {
      Toast.sad('昵称不合法');
      return;
    }
    if (!birthday) {
      Toast.sad('日期不合法');
      return;
    }
    if (!city) {
      Toast.sad('地址不合法');
      return;
    }

    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      let overlayView = (
        <Overlay.View
          style={{flex: 1, backgroundColor: '#000'}}
          modal={true}
          overlayOpacity={0}
          ref={v => (this.overlayView = v)}>
          <View
            style={{
              marginTop: pxToDp(30),
              alignSelf: 'center',
              width: pxToDp(334),
              height: pxToDp(334),
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>浮层</Text>
            <Image
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                left: 0,
                top: 0,
                zIndex: 100,
              }}
              source={require('../../../imges/scan.gif')}
            />
            <Image
              source={{uri: image.path}}
              style={{width: '60%', height: '60%'}}
            />
          </View>
        </Overlay.View>
      );
      Overlay.show(overlayView);
      Toast.showLoading('接口请求中');
      //模拟请求接口
      let key = 2;
      let time = setInterval(() => {
        key--;
        if (key === 0) {
          Toast.hideLoading();
          clearInterval(time);
        }
      }, 1000);
      //注册 极光
      console.log(this.props.RootStore);
      JMessage.register(
        this.props.RootStore.userId,
        this.props.RootStore.mobile,
      )
        .then(res => {
          console.log(res);
          this.overlayView.close();
          // Toast.smile('操作成功');
          this.props.navigation.navigate('Tabbar');
        })
        .catch(err => {
          console.log(err);
          this.overlayView.close();
        });
    });
  };
  render(h) {
    const {nickname, gender, city} = this.state;
    return (
      <View style={{backgroundColor: '#fff', flex: 1, padding: pxToDp(20)}}>
        <Text style={{color: '#666', fontSize: pxToDp(20), fontWeight: 'bold'}}>
          填写资料
        </Text>
        <Text style={{color: '#666', fontSize: pxToDp(20), fontWeight: 'bold'}}>
          提升我的魅力
        </Text>
        {/* 图片开始 */}
        <View style={{padding: pxToDp(20)}}>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              width: '60%',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={{
                width: pxToDp(60),
                height: pxToDp(60),
                borderRadius: pxToDp(30),
                backgroundColor: gender === '男' ? '#2db3f8' : '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={this.grenderClick.bind(this, '男')}>
              <Svg icon="nanxingrenwu" size="34" fill="#ccc" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: pxToDp(60),
                height: pxToDp(60),
                borderRadius: pxToDp(30),
                backgroundColor: gender === '女' ? '#2db3f8' : '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={this.grenderClick.bind(this, '女')}>
              <Svg icon="nvxingrenwu" size="34" fill="#ccc" />
            </TouchableOpacity>
          </View>
        </View>
        {/* 图片结束 */}
        {/* 输入数据 */}
        <View>
          <Input
            value={nickname}
            placeholder="设置昵称"
            onChangeText={nickname => {
              this.setState({nickname});
            }}
          />
        </View>
        {/* 日期 */}
        <View>
          <DateTimePicker
            placeholder="设置生日"
            display="spinner"
            getDateValue={date => {
              this.setState({birthday: date});
            }}
          />
        </View>
        {/* 地址 */}
        <View>
          <TouchableOpacity onPress={this.getAddress} activeOpacity={1}>
            <Input
              value={'当前定位:' + city}
              inputStyle={{color: '#666'}}
              disabled={true}
            />
          </TouchableOpacity>
        </View>
        {/* 按钮 */}
        <THButtom
          onPress={this.chooeseHeadImg}
          style={{
            height: pxToDp(40),
            borderRadius: pxToDp(30),
            alignSelf: 'center',
            marginTop: pxToDp(20),
          }}>
          设置头像
        </THButtom>
      </View>
    );
  }
}
export default index;
