/**
 * Created by Dennis Wang
 * on 2019-02-19 15:40
 */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

class TouchExample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#000"
          }}
        >
          <Text style={styles.title}>下面是各种按钮：</Text>
        </View>

        <TouchableWithoutFeedback
          onBlur={() => {
            console.log("- 1 Blur - ");
          }}
          onFocus={() => {
            console.log("- 1 Focus - ");
          }}
          onLayout={() => {
            console.log("- 1 Layout - ");
          }}
          onLongPress={() => {
            console.log("- 1 LongPress - ");
          }}
          onPress={() => {
            console.log("- 1 Press - ");
          }}
          onPressIn={() => {
            console.log("- 1 PressIn - ");
          }}
          onPressOut={() => {
            console.log("- 1 PressOut - ");
          }}
        >
          <View>
            <Text>TouchableWithoutFeedback</Text>
            <Text>👆 这个按钮没有反馈信息</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableHighlight
          style={styles.button1}
          underlayColor={"#ff1a0f"}
          onBlur={() => {
            console.log("- 2 Blur - ");
          }}
          onFocus={() => {
            console.log("- 2 Focus - ");
          }}
          onLayout={() => {
            console.log("- 2 Layout - ");
          }}
          onLongPress={() => {
            console.log("- 2 LongPress - ");
          }}
          onPress={() => {
            console.log("- 2 Press - ");
          }}
          onPressIn={() => {
            console.log("- 2 PressIn - ");
          }}
          onPressOut={() => {
            console.log("- 2 PressOut - ");
          }}
        >
          <View>
            <Text>TouchableHighlight</Text>
            <Text>👆 这个按钮 按下去会变成设置的颜色</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity
          style={styles.button2}
          onBlur={() => {
            console.log("- 3 Blur - ");
          }}
          onFocus={() => {
            console.log("- 3 Focus - ");
          }}
          onLayout={() => {
            console.log("- 3 Layout - ");
          }}
          onLongPress={() => {
            console.log("- 3 LongPress - ");
          }}
          onPress={() => {
            console.log("- 3 Press - ");
          }}
          onPressIn={() => {
            console.log("- 3 PressIn - ");
          }}
          onPressOut={() => {
            console.log("- 3 PressOut - ");
          }}
        >
          <View>
            <Text>TouchableOpacity</Text>
            <Text>👆 这个按钮 按下去会变透明</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    margin: 10,
    fontSize: 14
  },
  button1: {
    width: 300,
    height: 50,
    margin: 10,
    backgroundColor: "#ffbcbc",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  button2: {
    width: 300,
    height: 50,
    margin: 10,
    backgroundColor: "#ff34a0",
    borderWidth: 1,
    borderColor: "#d6cbce",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  }
});

export default TouchExample;
