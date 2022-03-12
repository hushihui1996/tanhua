import React, {Component} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import {ImageHeaderScrollView} from 'react-native-image-header-scroll-view';
import {pxToDp} from '../../../utils/stylesKits';
import Friend from '../components/Friend';
import Visitors from '../components/Visitors';
import PrefectGirl from '../components/PrefectGirl';
import FilterPanel from '../components/FilterPanel';
import {Overlay} from 'teaset';

class index extends Component {
  state = {
    params: {
      pageSize: '10',
      pageNum: '1',
      gender: '男',
      distance: 2,
      lastLogin: '',
      city: '',
      education: '',
    },
    List: [
      {
        nick_name: '若只如初见',
        sex: '男',
        age: '23',
        marry: '单身',
        xueli: '大专',
        faetValue: '99',
        header:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ffd%2Ff1%2Fda%2Ffdf1dacb8ff0b8f13ed29bcbee42f328.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649483413&t=be5ae07b437d860b5a7758c4f3d7f2d5',
      },
      {
        nick_name: '若只如初见',
        sex: '女',
        age: '25',
        marry: '单身',
        xueli: '大专',
        faetValue: '345',
        header:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ffd%2Ff1%2Fda%2Ffdf1dacb8ff0b8f13ed29bcbee42f328.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649483413&t=be5ae07b437d860b5a7758c4f3d7f2d5',
      },
      {
        nick_name: '若只如初见',
        sex: '女',
        age: '23',
        marry: '单身',
        xueli: '大专',
        faetValue: '234',
        header:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ffd%2Ff1%2Fda%2Ffdf1dacb8ff0b8f13ed29bcbee42f328.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649483413&t=be5ae07b437d860b5a7758c4f3d7f2d5',
      },
      {
        nick_name: '若只如初见',
        sex: '男',
        age: '23',
        marry: '单身',
        xueli: '大专',
        faetValue: '56',
        header:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ffd%2Ff1%2Fda%2Ffdf1dacb8ff0b8f13ed29bcbee42f328.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649483413&t=be5ae07b437d860b5a7758c4f3d7f2d5',
      },
      {
        nick_name: '若只如初见',
        sex: '女',
        age: '23',
        marry: '单身',
        xueli: '大专',
        faetValue: '65.8',
        header:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ffd%2Ff1%2Fda%2Ffdf1dacb8ff0b8f13ed29bcbee42f328.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649483413&t=be5ae07b437d860b5a7758c4f3d7f2d5',
      },
      {
        nick_name: '若只如初见',
        sex: '男',
        age: '23',
        marry: '单身',
        xueli: '大专',
        faetValue: '234',
        header:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ffd%2Ff1%2Fda%2Ffdf1dacb8ff0b8f13ed29bcbee42f328.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649483413&t=be5ae07b437d860b5a7758c4f3d7f2d5',
      },
      {
        nick_name: '若只如初见',
        sex: '女',
        age: '23',
        marry: '单身',
        xueli: '大专',
        faetValue: '234',
        header:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ffd%2Ff1%2Fda%2Ffdf1dacb8ff0b8f13ed29bcbee42f328.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649483413&t=be5ae07b437d860b5a7758c4f3d7f2d5',
      },
      {
        nick_name: '若只如初见',
        sex: '男',
        age: '23',
        marry: '单身',
        xueli: '大专',
        faetValue: '234',
        header:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ffd%2Ff1%2Fda%2Ffdf1dacb8ff0b8f13ed29bcbee42f328.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649483413&t=be5ae07b437d860b5a7758c4f3d7f2d5',
      },
    ],
  };
  //筛选覆层
  reconmendFilterShow = () => {
    const {pageNum, pageSize, ...others} = this.state.params;
    let overlayView = (
      <Overlay.View
        style={{position: 'relative'}}
        modal={true}
        overlayOpacity={0.5}
        ref={v => (this.overlayView = v)}>
        <FilterPanel
          params={others}
          clearOverlay={() => this.overlayView.close()}
          headerSubmitFilter={this.headerSubmitParams}
        />
      </Overlay.View>
    );
    Overlay.show(overlayView);
  };
  //接收参数
  headerSubmitParams = res => {
    console.log(res, 'res');
  };
  render() {
    const {List} = this.state;
    return (
      <ImageHeaderScrollView
        maxHeight={pxToDp(133)}
        minHeight={pxToDp(44)}
        headerImage={require('../../../imges/jiaoyou.jpeg')}
        renderForeground={() => (
          <View
            style={{
              height: pxToDp(130),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <StatusBar backgroundColor={'transparent'} translucent={true} />
            <Friend />
          </View>
        )}>
        <View>
          <Visitors />
          <PrefectGirl />
          {/* 推荐 */}
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: '#eee',
                width: '100%',
                height: pxToDp(35),
              }}>
              <Text
                style={{
                  color: '#666',
                  fontSize: pxToDp(14),
                  marginLeft: pxToDp(15),
                }}>
                推荐
              </Text>
              <TouchableOpacity
                // activeOpacity={1}
                onPress={this.reconmendFilterShow}>
                <Text
                  style={{
                    fontFamily: 'iconfont',
                    color: '#666',
                    fontSize: pxToDp(18),
                    marginRight: pxToDp(15),
                  }}>
                  &#xe74a;
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* 列表 */}
          <View>
            {List.map((v, i) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingBottom: pxToDp(10),
                  paddingTop: pxToDp(10),
                }}>
                <View
                  style={{paddingLeft: pxToDp(15), paddingRight: pxToDp(15)}}>
                  <Image
                    source={{uri: v.header}}
                    style={{
                      width: pxToDp(45),
                      height: pxToDp(45),
                      borderRadius: pxToDp(30),
                    }}
                  />
                </View>
                {/*   文字内容 */}
                <View style={{flex: 2, justifyContent: 'space-around'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#555', fontSize: pxToDp(13)}} t>
                      {v.nick_name}
                    </Text>
                    {v.sex === '女' ? (
                      <Text
                        style={{
                          fontFamily: 'iconfont',
                          color: 'red',
                          fontSize: pxToDp(13),
                          paddingLeft: pxToDp(5),
                        }}>
                        &#xe68b;
                      </Text>
                    ) : (
                      <Text
                        style={{
                          fontFamily: 'iconfont',
                          color: 'blue',
                          fontSize: pxToDp(13),
                          paddingLeft: pxToDp(5),
                        }}>
                        &#xe68d;
                      </Text>
                    )}

                    <Text
                      style={{
                        color: '#555',
                        paddingLeft: pxToDp(5),
                        fontSize: pxToDp(13),
                      }}>
                      {v.age}岁
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#555', fontSize: pxToDp(13)}}>
                      {v.marry}
                    </Text>
                    <Text
                      style={{
                        color: '#555',
                        paddingLeft: pxToDp(5),
                        fontSize: pxToDp(13),
                      }}>
                      |
                    </Text>
                    <Text
                      style={{
                        color: '#555',
                        paddingLeft: pxToDp(5),
                        fontSize: pxToDp(13),
                      }}>
                      {v.xueli}
                    </Text>
                    <Text
                      style={{
                        color: '#555',
                        paddingLeft: pxToDp(5),
                        fontSize: pxToDp(13),
                      }}>
                      |
                    </Text>
                    <Text
                      style={{
                        color: '#555',
                        paddingLeft: pxToDp(5),
                        fontSize: pxToDp(13),
                      }}>
                      年龄相仿
                    </Text>
                  </View>
                </View>
                {/* 爱心 */}
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'iconfont',
                      color: 'red',
                      fontSize: pxToDp(16),
                      paddingLeft: pxToDp(5),
                    }}>
                    &#xe8c3;
                  </Text>
                  <Text style={{fontSize: pxToDp(13), color: 'red'}}>
                    {v.faetValue}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ImageHeaderScrollView>
    );
  }
}
export default index;
