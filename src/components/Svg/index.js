import React, {Component} from 'react';
import {ViewStyle} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import svgs from '../../assets/js/icons';
import {pxToDp} from '../../utils/stylesKits';
export default class Svg extends Component {
  render() {
    const {icon, color, size, style} = this.props;
    let svgXmlData = svgs[icon];

    if (!svgXmlData) {
      let err_msg = `没有"${icon}"这个icon，请下载最新的icomoo,并且进入iconSvg下执行 node getSvg`;
      throw new Error(err_msg);
    }
    return (
      <SvgUri
        width={pxToDp(size)}
        height={pxToDp(size)}
        svgXmlData={svgXmlData}
        fill={color}
        style={style}
      />
    );
  }
}
