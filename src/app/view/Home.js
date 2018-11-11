/* eslint-disable react/jsx-filename-extension */
/**
 * Created by Dennis Wang
 * on 2017/1/2 PM10:36
 */

import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  // sbu
  sbu_view: {
    height: 84,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
  },
  sbu_red: {
    backgroundColor: '#FA6778',
    borderColor: '#FA6778',
  },

  sbu_blue: {
    backgroundColor: '#3D98FF',
    borderColor: '#3D98FF',
  },

  sbu_green: {
    backgroundColor: '#5EBE00',
    borderColor: '#5EBE00',
  },

  sbu_yellow: {
    backgroundColor: '#FC9720',
    borderColor: '#FC9720',
  },
  sbu_flex: {
    flex: 1,
  },
  sbu_borderRight: {
    borderColor: '#fff',
    borderRightWidth: 0.5,
  },
  sbu_icon_img: {
    height: 40,
    width: 40,
  },
  sub_con_flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sub_text: {
    justifyContent: 'center',
  },
  font16: {
    fontSize: 17,
    color: '#FFF',
    fontWeight: '900',
  },
  sbu_borderBottom: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#fff',
  },
});

// 图标图片
const BUIcon = [
  'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
  'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
  'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png',
  'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/gonglue.png'
];

export default class Home extends React.Component {

  static navigationOptions = {
    title: '主页',
    headerStyle: {
      backgroundColor: '#1898fb',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };


  _openPage(cmpt) {
    const { navigate } = this.props.navigation;
    if (cmpt) {
      navigate("Swiper");
    } else {
      alert('正在开发中。。。');
    }
  }


  render() {
    const FUNCS = [
      {
        category: '财务',
        cmpt: { title: '财务' },
        uri: BUIcon[0],
        subcate1: '信用卡',
        subcate2: '借记卡',
        subcate3: '支付宝',
        subcate4: '白条',
        bgColor: styles.sbu_red,
      },
      {
        category: '工作',
        uri: BUIcon[1],
        subcate1: '加班',
        subcate2: '任务',
        subcate3: '事项',
        subcate4: '活动',
        bgColor: styles.sbu_blue
      },
      {
        category: '工具',
        uri: BUIcon[2],
        subcate1: '信用卡',
        subcate2: '借记卡',
        subcate3: '支付宝',
        subcate4: '白条',
        bgColor: styles.sbu_green
      },
      {
        category: '技术',
        uri: BUIcon[3],
        subcate1: '信用卡',
        subcate2: '借记卡',
        subcate3: '支付宝',
        subcate4: '白条',
        bgColor: styles.sbu_yellow
      },
    ];

    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF', paddingTop: 5 }}>
        {
          FUNCS.map((category, i) => (
            <View style={[category.bgColor, styles.sbu_view]} key={i}>
              <TouchableOpacity
                activeOpacity={0.8} underlayColor={'#FA6778'} style={{ flex: 1 }}
                onPress={this._openPage.bind(this, category.cmpt)}
              >
                <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
                  <View style={[styles.sub_con_flex, styles.sub_text]}>
                    <Text style={[styles.font16]}>{category.category}</Text>
                  </View>
                  <View style={[styles.sub_con_flex]}>
                    <Image style={[styles.sbu_icon_img]} resizeMode={'contain'} source={{ uri: category.uri }} />
                  </View>
                </View>
              </TouchableOpacity>

              <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}
                  onPress={this._openPage.bind(this, category.cmpt1)}
                >
                  <Text style={[styles.font16]}>{category.subcate1}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8} style={[styles.sub_con_flex, styles.sub_text]}
                  onPress={this._openPage.bind(this, category.cmpt2)}
                >
                  <Text style={[styles.font16]}>{category.subcate2}</Text>
                </TouchableOpacity>
              </View>

              <View style={[styles.sbu_flex]}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}
                  onPress={this._openPage.bind(this, category.cmpt3)}
                >
                  <Text style={[styles.font16]}>{category.subcate3}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8} style={[styles.sub_con_flex, styles.sub_text]}
                  onPress={this._openPage.bind(this, category.cmpt4)}
                >
                  <Text style={[styles.font16]}>{category.subcate4}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        }
      </View>
    );
  }
}
