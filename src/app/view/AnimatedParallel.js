/**
 *  同时运行动画
 */
import React from "react";
import { Animated, Dimensions, Easing, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

export default class AnimatedParallel extends React.Component {
  static navigationOptions = {
    title: "同时执行",
    headerStyle: {
      backgroundColor: "#27fbb7"
    },
    headerTintColor: "#0f0f0f",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      fadeInOpacity: new Animated.Value(0),
      rotation: new Animated.Value(0),
      fontSize: new Animated.Value(0)
    };
  }

  componentDidMount() {
    let timing = Animated.timing;
    Animated.parallel(
      ["fadeInOpacity", "rotation", "fontSize"].map(property => {
        return timing(this.state[property], {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear
        });
      })
    ).start();
  }

  render() {
    return (
      <Animated.View
        style={[
          styles.demo,
          {
            opacity: this.state.fadeInOpacity,
            transform: [
              {
                rotateZ: this.state.rotation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "360deg"]
                })
              }
            ]
          }
        ]}
      >
        <Animated.Text
          style={{
            fontSize: this.state.fontSize.interpolate({
              inputRange: [0, 1],
              outputRange: [12, 26]
            })
          }}
        >
          同时：又转，又显现，又放大
        </Animated.Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  demo: {
    flex: 1,
    width: width,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    fontSize: 30
  }
});
