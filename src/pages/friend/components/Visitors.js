import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {pxToDp, screenWidth} from '../../../utils/stylesKits';
class index extends Component {
  state = {
    visitors: [
      {
        header:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ffd%2Ff1%2Fda%2Ffdf1dacb8ff0b8f13ed29bcbee42f328.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649483413&t=be5ae07b437d860b5a7758c4f3d7f2d5',
      },
      {
        header:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F30%2F90%2F40%2F309040a0602c672cebc6ab3a1bbbc8cd.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649483413&t=55ee89902520f383e553628f53556184',
      },
      {
        header:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fcc%2F1e%2F54%2Fcc1e54af680cf82203670062d1875077.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649483513&t=ffb2a938a3945b709fbfefe6481d3725',
      },
      {
        header:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ffd%2Ff1%2Fda%2Ffdf1dacb8ff0b8f13ed29bcbee42f328.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649483413&t=be5ae07b437d860b5a7758c4f3d7f2d5',
      },
      {
        header:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F30%2F90%2F40%2F309040a0602c672cebc6ab3a1bbbc8cd.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649483413&t=55ee89902520f383e553628f53556184',
      },
      {
        header:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fcc%2F1e%2F54%2Fcc1e54af680cf82203670062d1875077.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649483513&t=ffb2a938a3945b709fbfefe6481d3725',
      },
      {
        header:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ffd%2Ff1%2Fda%2Ffdf1dacb8ff0b8f13ed29bcbee42f328.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649483413&t=be5ae07b437d860b5a7758c4f3d7f2d5',
      },
      {
        header:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F30%2F90%2F40%2F309040a0602c672cebc6ab3a1bbbc8cd.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649483413&t=55ee89902520f383e553628f53556184',
      },
      {
        header:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fcc%2F1e%2F54%2Fcc1e54af680cf82203670062d1875077.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649483513&t=ffb2a938a3945b709fbfefe6481d3725',
      },
    ],
  };
  render(h) {
    const {visitors} = this.state;
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: pxToDp(10),
          width: screenWidth,
        }}>
        <Text
          style={{
            flex: 2,
            fontSize: pxToDp(14),
            lineHeight: pxToDp(30),
            paddingLeft: pxToDp(5),
            paddingRight: pxToDp(5),
            color: '#666',
          }}>
          最近有{visitors.length}人来访，快去查看...
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            // justifyContent: 'space-around',
          }}>
          <View
            style={{
              width: '80%',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            {visitors.map((v, i) => (
              <Image
                key={i}
                //   source={require('../../../imges/touxiang3.jpeg')}
                source={{uri: v.header}}
                style={{
                  width: pxToDp(30),
                  height: pxToDp(30),
                  borderRadius: pxToDp(50),
                }}
              />
            ))}
          </View>
          <View style={{width: '20%', paddingLeft: pxToDp(10)}}>
            <Text style={{color: '#666', fontSize: pxToDp(24)}}>&gt;</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default index;
