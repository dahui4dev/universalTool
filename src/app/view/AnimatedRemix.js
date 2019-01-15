/**
 * 混合运行
 */
import React from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";

const { height, width } = Dimensions.get("window");

export default class AnimatedRemix extends React.Component {
  static navigationOptions = {
    title: "混合执行",
    headerStyle: {
      backgroundColor: "#FC9720"
    },
    headerTintColor: "#0f0f0f",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      anim: [1, 2, 3].map(() => new Animated.Value(0)) // 初始化3个值
    };
  }

  componentDidMount() {
    Animated.sequence([
      Animated.stagger(
        400,
        this.state.anim.map(left => {
            return Animated.timing(left, { toValue: 1 });
          })
          .concat(
            this.state.anim.map(left => {
              return Animated.timing(left, { toValue: 0 });
            })
          )
      ),
      // 三个view滚到右边再还原，每个动作间隔200ms

      // 延迟1000ms，配合sequence使用
      Animated.delay(1000),
      Animated.timing(this.state.anim[0], {
        toValue: 1
      }),
      Animated.timing(this.state.anim[1], {
        toValue: -1
      }),
      Animated.timing(this.state.anim[2], {
        toValue: 0.5
      }),
      Animated.delay(1000),
      Animated.parallel(
        this.state.anim.map(anim =>
          Animated.timing(anim, {
            toValue: 0
          })
        )
      ) // 同时回到原位置
    ]).start();
  }

  render() {
    let views = this.state.anim.map(function(value, i) {
      let imageUrl =
        "https://storage.jd.com/imgtools/ce18a6562e-9e7bb210-fec1-11e8-a6af-81ec2fd5da54.png";
      switch (i) {
        case 0:
          imageUrl =
            "https://storage.jd.com/imgtools/483409976e-a3468090-fec1-11e8-8722-3bf5b6082510.png";
          break;
        case 1:
          imageUrl =
            "https://storage.jd.com/imgtools/e2a94eaeff-9e7c2740-fec1-11e8-a6af-81ec2fd5da54.png";
          break;
      }
      return (
        <Animated.View
          key={i}
          style={[
            styles.demo,
            styles["demo" + i],
            {
              left: value.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 200]
              })
            }
          ]}
        >
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </Animated.View>
      );
    });
    return (
      <View style={styles.container}>
        <Text>sequence/delay/stagger/parallel 演示</Text>
        <Text>顺序/推迟/交错/并行 演示</Text>
        {views}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  demo: {
    width: width * 0.6,
    height: height * 0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  image: {
    width: width * 0.6,
    height: height * 0.2,
    resizeMode: "contain"
  }
});
