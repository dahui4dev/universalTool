/**
 * Created by Dennis Wang
 * on 2019-01-16 01:13
 */

import React from "react";
import Swiper from "react-native-swiper";
import { PanResponder, StyleSheet, View, Text } from "react-native";

class PanResponderCarousel extends React.Component {
  static navigationOptions = {
    title: "手势实例",
    headerStyle: {
      backgroundColor: "#4687ff"
    },
    headerTintColor: "#f7f7f7",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      lastText: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Swiper loop={false} style={styles.wrapper}>
            <View
              style={styles.slide1}
              {...PanResponder.create({
                onMoveShouldSetPanResponder: (e, gestureState) => {
                  const { dx, dy } = gestureState;
                  const xyRatio = Math.abs(dx / dy);
                  if (xyRatio > 5 && dx > 10) {
                    this.props.navigation.goBack();
                  }

                  return false;
                }
              }).panHandlers}
            >
              <Text>这是第 1 张</Text>
            </View>

            <View style={styles.slide2}>
              <Text>这是第 2 张</Text>
            </View>

            <View
              style={styles.slide3}
              {...PanResponder.create({
                onMoveShouldSetPanResponder: (e, gestureState) => {
                  const { dx, dy } = gestureState;
                  const xyRatio = Math.abs(dx / dy);
                  if (xyRatio > 5 && dx < -10) {
                    this.setState({
                      lastText: "已经是最后一页了～"
                    });
                  }

                  return false;
                }
              }).panHandlers}
            >
              <Text>这是第 3 张</Text>
              <Text>{this.state.lastText}</Text>
            </View>
          </Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // paddingTop: 64
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e2e2e2"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e2e2e2"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e2e2e2"
  }
});

export default PanResponderCarousel;
