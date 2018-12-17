/* 顺序运行 */
import React from 'react'
import {
  Animated,
  Easing,
  StyleSheet,
  Dimensions
} from 'react-native';

const { height, width } = Dimensions.get('window')

export default class AnimatedSequence extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeInOpacity: new Animated.Value(0),
      rotation: new Animated.Value(0),
      fontSize: new Animated.Value(0)
    }
  }

  componentDidMount() {
    let timing = Animated.timing;
    Animated.sequence(['fadeInOpacity', 'rotation', 'fontSize'].map(property => {
      return timing(this.state[property], {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      });
    })).start();
  }

  render() {
    return (
      <Animated.View style={[styles.demo, {
        opacity: this.state.fadeInOpacity,
        transform: [{
          rotateZ: this.state.rotation.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] })
        }]
      }]}>
        <Animated.Text style={{
          fontSize: this.state.fontSize.interpolate({
            inputRange: [0, 1],
            outputRange: [12, 26]
          })
        }}>顺序：又转，又渐显，又放大</Animated.Text>
      </Animated.View>
    );
  }
};

const styles = StyleSheet.create({
  demo: {
    flex: 1,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30
  }
});