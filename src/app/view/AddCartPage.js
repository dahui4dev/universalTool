/**
 * Created by Dennis Wang
 * on 2019-01-09 09:58
 */
import React from "react";
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

let animationNo = 0;

class AddCartPage extends React.Component {
  static navigationOptions = {
    title: "加购物车"
  };

  constructor(props) {
    super(props);
    this.state = {
      addCartAnimations: []
    };
  }

  _addToCart(index) {
    animationNo += 1;
    const initialBottom = 550 - index * 50;
    const left = new Animated.Value(80);
    const bottom = new Animated.Value(initialBottom);
    const scale = new Animated.Value(0.3);
    const opacity = left.interpolate({
      inputRange: [130, 230, 680],
      outputRange: [1, 1, 0.7]
    });

    const animation = {
      id: `${animationNo}`,
      container: {
        zIndex: 100,
        position: "absolute",
        left,
        bottom,
        opacity,
        transform: [{ scale }],
        width: 80,
        height: 80,
        backgroundColor: "transparent"
      },
      image: {
        borderRadius: 40,
        width: 80,
        height: 80
      }
    };

    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
        seNativeDriver: true
      }),
      Animated.timing(scale, {
        toValue: 1.25,
        duration: 70,
        easing: Easing.linear,
        seNativeDriver: true
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 70,
        easing: Easing.linear,
        seNativeDriver: true
      }),
      Animated.timing(scale, {
        delay: 60,
        toValue: 0.25,
        duration: 500,
        easing: Easing.linear,
        seNativeDriver: true
      })
    ]).start();

    Animated.sequence([
      Animated.timing(bottom, {
        toValue: initialBottom + 100,
        duration: 200,
        easing: Easing.linear,
        seNativeDriver: true
      }),
      Animated.timing(bottom, {
        delay: 200,
        toValue: 80,
        duration: 500,
        easing: Easing.in(Easing.quad),
        seNativeDriver: true
      })
    ]).start();

    Animated.sequence([
      Animated.timing(left, {
        toValue: 140,
        duration: 200,
        easing: Easing.linear,
        seNativeDriver: true
      }),
      Animated.timing(left, {
        delay: 200,
        toValue: 310,
        duration: 510,
        easing: Easing.linear,
        seNativeDriver: true
      })
    ]).start();

    this.setState({
      addCartAnimations: [...this.state.addCartAnimations, animation]
    });
  }

  _renderItem = (item, index) => {
    return (
      <View
        key={item.key}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#f7f7f7",
          borderColor: "#ff2450",
          borderWidth: 2,
          height: 84
        }}
      >
        <Image
          source={require(`../images/001.gif`)}
          resizeMode="contain"
          style={{ width: 100, height: 80, marginLeft: 5 }}
        />
        <TouchableOpacity onPress={this._addToCart.bind(this, index)}>
          <Image
            source={require("../images/addCart.png")}
            resizeMode="contain"
            style={{ width: 100, height: 35, marginRight: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    let data = [];
    for (let i = 0; i < 4; i++) {
      data.push({ key: i, title: i + "" });
    }

    return (
      <View style={{ flex: 1 }}>
        <Text style={{ alignSelf: "center", fontSize: 16, padding: 5 }}>
          假装是个列表
        </Text>
        {data.map((item, index) => {
          return this._renderItem(item, index);
        })}
        {
          <View style={{ flex: 1 }}>
            <Image
              style={{
                position: "absolute",
                right: 10,
                bottom: 100,
                width: 40,
                height: 40
              }}
              source={require("../images/goToCart2.png")}
            />
          </View>
        }
        {this.state.addCartAnimations
          .filter(v => !!v)
          .map(animation => (
            <Animated.View key={animation.id} style={animation.container}>
              <Image
                style={animation.image}
                source={require("../images/001.gif")}
              />
            </Animated.View>
          ))}
      </View>
    );
  }
}

export default AddCartPage;

const styles = StyleSheet.create({});
