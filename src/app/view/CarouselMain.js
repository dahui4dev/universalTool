/**
 * 轮播组件
 * Created by Dennis Wang
 * on 2017/1/3 PM2:00
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Swiper from "react-native-swiper";
import AnimatedParallel from "./AnimatedParallel";
import AnimatedRemix from "./AnimatedRemix";

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eb5639"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2d25e5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#39d91e"
  },
  text: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default class CarouselMain extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Swiper style={styles.wrapper}>
          <View style={styles.slide1}>
            <AnimatedParallel />
          </View>
          <View style={styles.slide2}>
            <AnimatedRemix />
          </View>
          <View style={styles.slide3}>
            <AnimatedParallel />
          </View>
        </Swiper>
      </View>
    );
  }
}
