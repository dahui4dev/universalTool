/**
 * Created by Dennis Wang
 * on 2017/1/3 PM2:00
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Swiper from 'react-native-swiper';
import ListViewDemo from './ListViewDemo';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eb5639',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d25e5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#39d91e',
  },
  text: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default class swiper extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Swiper style={styles.wrapper}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <ListViewDemo />
            {/*<Text style={styles.text}>Beautiful</Text>*/}
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}
