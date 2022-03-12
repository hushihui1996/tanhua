import {Dimensions} from 'react-native';
/**
 * 获取手机宽度
 */
export const screenWidth = Dimensions.get('window').width;
/**
 * 获取手机高度
 */
export const screenHeight = Dimensions.get('window').height;
/**
 * 像素转dp
 */
export const pxToDp = elePx => (screenWidth * elePx) / 375;
