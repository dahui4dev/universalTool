/**
 * Created by Dennis Wang
 * on 2017/1/4 AM12:41
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, AlertIOS,} from 'react-native';
import {Window} from '../common/utStyles';

// 导入json数据
const shareData = {
  data: [
    {icon: 'glass', title: 'glass'},
    {icon: 'music', title: 'music'},
    {icon: 'search', title: 'search'},
    {icon: 'envelope-o', title: 'envelope-o'},
    {icon: 'heart', title: 'heart'},
    {icon: 'star', title: 'star'},
    {icon: 'star-o', title: 'star-o'},
    {icon: 'user', title: 'user'},
    {icon: 'film', title: 'film'},
    {icon: 'th-large', title: 'th-large'},
    {icon: 'th', title: 'th'},
    {icon: 'th-list', title: 'th-list'},
    {icon: 'check', title: 'check'},
  ],
};

const styles = StyleSheet.create({
  listViewStyle: {
    // 主轴方向
    flexDirection: 'row',
    // 一行显示不下,换一行
    flexWrap: 'wrap',
    // 侧轴方向
    alignItems: 'center', // 必须设置,否则换行不起作用
  },

  innerViewStyle: {
    width: 100,
    height: 100,
    marginLeft: (Window.width - 300) / 4,  // (screenW - cellWH * cols) / (cols + 1)
    marginTop: 25,
    // 文字内容居中对齐
    alignItems: 'center',
  },

  iconStyle: {
    alignItems: 'center',
    width: 80,
    height: 80,
    justifyContent: 'center',
  },
});

export default class ListViewDemo extends Component {
  // 初始化状态值(可以变化)
  constructor(props) {
    super(props);
    this.state = {
      dataSource: shareData.data,
    };
  }

  // 返回cell
  renderItem(rowData) {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => { AlertIOS.alert('点击了'); }}>
        <View style={styles.innerViewStyle}>
          <Text>{rowData.title},{rowData.icon}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.dataSource}
        renderItem={this.renderItem}
        contentContainerStyle={styles.listViewStyle}
      />
    );
  }
}
