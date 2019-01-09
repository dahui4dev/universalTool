/**
 * 点赞飘心
 * Created by Dennis Wang
 * on 2019-01-08 14:46
 */
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FloatingHearts from "../components/FloatingHearts";


class FloatingHeartsPage extends React.Component {
  static navigationOptions = {
    title: "直播点赞飘心",
    headerStyle: {
      backgroundColor: "#ff6158"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  state = {
    count: 0,
    color: "red"
  };

  render() {
    const { count, color } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.button}
          onPress={() =>
            this.setState({
              count: count + 1
            })
          }
        >
          <Image source={require("../images/heart.png")} style={styles.btn} />
          <Text style={styles.text}>点一个吧</Text>
        </TouchableOpacity>

        <FloatingHearts count={count} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  button: {
    height: 50,
    width: 200,
    borderRadius: 10,
    marginBottom: 50,
    backgroundColor: "#28ffb7",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    tintColor: "#c846ff"
  },
  text: {
    color: "#000000",
    fontSize: 16
  }
});

export default FloatingHeartsPage;
