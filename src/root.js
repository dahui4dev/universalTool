/* eslint-disable max-len */
/**
 * Created by Dennis Wang
 * on 2017/1/2 PM10:06
 */

import React, { Component } from 'react';
import { Platform, TouchableOpacity, View, Text } from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, Sizes } from './app/common/utStyles';
import Home from './app/view/Home';
import swiper from './app/view/Swiper';


export default class Main extends Component {
  _renderScene(route, navigator) {
    const Cmpt = route.component;
    return (
      <Cmpt {...route.params} navigator={navigator} />
    );
  }

  _renderNavBar() {
    const styles = {
      title: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
      },
      button: {
        flex: 1, width: 60, paddingLeft: 5, alignItems: 'center', justifyContent: 'center',
      },
      buttonText: {
        fontSize: Sizes.titleFontSize, color: '#FFFFFF', fontWeight: '400',
      },
    };

    const routeMapper = {
      LeftButton(route, navigator, index, navState) {
        if (index > 0) {
          return (
            <TouchableOpacity
              onPress={() => navigator.pop()}
              style={styles.button}
            >
              <Text style={styles.buttonText}>返回</Text>
            </TouchableOpacity>
          );
        }
        return (
          <View style={styles.button}>
            <Icon name={'users'} color={'white'} size={Sizes.titleBtnFontSize} />
          </View>
        );
      },

      RightButton(route, navigator, index, navState) {
        if (route.rightButton) {
          return (
            <TouchableOpacity
              onPress={() => route.rightButton.func(navigator)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>{route.rightButton.name ? route.rightButton.name : route.rightButton.icon}</Text>
            </TouchableOpacity>
          );
        }
        return (
          <TouchableOpacity
            onPress={() => navigator.pop()}
            style={styles.button}
          >
            {/* <Text style={styles.buttonText}>Logo</Text>*/}
          </TouchableOpacity>
        );
      },

      Title(route, navigator, index, navState) {
        return (
          <View style={styles.title}>
            <Text style={styles.buttonText}>{route.title ? route.title : ''}</Text>
          </View>
        );
      },
    };

    return (
      <NavigationBar
        style={{
          alignItems: 'center',
          backgroundColor: Colors.themeColor,
          shadowOffset: {
            width: 1,
            height: 0.5,
          },
          shadowColor: Colors.themeColor,
          shadowOpacity: 0.8,
        }}
        routeMapper={routeMapper}
      />
    );
  }

  render() {
    const initRoute = {
      title: '工具集',
      rightButton: {
        name: '功能',
        icon: 'smile-o',
        func: (navigator) => {
          navigator.push({
            title: '轮播组件',
            rightButton: {
              name: '轮播',
              icon: 'icon',
              func: (navigator) => {
                console.log('---', navigator);
              },
            },
            component: swiper,
          });
        },
      },
      component: Home,
    };

    return (
      <NavigationBar
        initialRoute={initRoute}
        renderScene={this._renderScene}
        sceneStyle={{ paddingTop: (Platform.OS === 'ios' ? 65 : 65) }}
        navigationBar={this._renderNavBar()}
      />
    );
  }
}