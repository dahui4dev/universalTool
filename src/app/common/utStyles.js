/**
 * Created by Dennis Wang
 * on 2017/1/3 PM1:44
 * 通用变量: 样式: 主题、窗口宽高
 */

import {Dimensions, PixelRatio} from 'react-native';

export const Window = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export const Colors = {
  // 主题颜色
  themeColor: '#55ACEE',
  themeBgColor: 'white',
  themeGreyBgColor: 'rgb(190, 190, 190)',

  // tabBar 相关颜色
  tabBgColor: 'rgba(217, 248, 245, 0.1)',
  tabItemColor: 'rgb(190, 190, 190)',
  tabItemSltColor: 'rgb(69, 181, 255)',

  // 一级导航 下拉菜单 相关颜色
  menuColor: 'rgb(29, 151, 255)',
  titleFontColor: '#fff',
  optTextColor: '#fff',

  // border颜色
  borderColor: '#ccc',

  // 字体颜色
  searchGrey: 'rgb(231, 222, 231)',
  greyColor: 'rgb(245, 245, 245)',
  fontGrey: 'grey',
  fontWhite: 'white',
  fontRed: 'red',
};

export const Sizes = {
  /**
   * screen size :屏幕相关尺寸
   * 自定义 栅格系统 十二等分
   */
  offsetWidth: Dimensions.get('window').width,          // 整个屏幕的宽
  offsetHeight: Dimensions.get('window').height,        // 整个屏幕的高
  cellWidth: Math.floor(Dimensions.get('window').width / 12),   // 一个栅格的宽
  cellHeight: Math.floor(Dimensions.get('window').height / 12), // 一个栅格的高

  /**
   * 像素
   */
  pixel: 1 / PixelRatio.get(),
  pixelRatioGet: PixelRatio.get(),

  /**
   * font size
   */
  // 主题图标大小
  themeSize: 18,
  titleFontSize: 18,
  titleBtnFontSize: 18,
  baseFontSize: 0,

  // tabBar 相关图标大小
  tabItemSize: 25,
  tabItemSltSize: 25,

  // 一级导航 下拉菜单 相关大小
  headerSize: 18,
  optTextFontSize: 16,
};