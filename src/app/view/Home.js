/**
 * 主页
 * Created by Dennis Wang
 * on 2017/1/2 PM10:36
 */

import React from "react";
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
const { height, width } = Dimensions.get("window");
const ITEM_HEIGHT = 100;

const FUNCS = [
  {
    category: "基础动画",
    cmpt: { cmptName: "CarouselMain" },
    iconPath: require("../images/gonglue.png"),
    subcate1: "并行动画",
    cmpt1: { cmptName: "AnimatedParallel" },
    subcate2: "混合动画",
    cmpt2: { cmptName: "AnimatedRemix" },
    subcate3: "顺序执行",
    cmpt3: { cmptName: "AnimatedSequence" },
    subcate4: "",
    cmpt4: { cmptName: "AnimatedStaggere" },
    bgColor: "#FA6778"
  },
  {
    category: "组合特效︎",
    iconPath: require("../images/feiji.png"),
    subcate1: "点赞飘心",
    cmpt1: { cmptName: "FloatingHeartsPage" },
    subcate2: "🚩︎",
    cmpt2: { cmptName: "FloatingHeartsPage" },
    subcate3: "加购物车",
    cmpt3: { cmptName: "AddCartPage" },
    subcate4: "🚩︎",
    bgColor: "#3D98FF"
  },
  {
    category: "手势系统",
    iconPath: require("../images/lvyou.png"),
    subcate1: "简单手势",
    cmpt1: { cmptName: "PanResponderExample" },
    subcate2: "🚩︎",
    subcate3: "手势实例",
    cmpt3: { cmptName: "PanResponderCarousel" },
    subcate4: "🚩︎",
    bgColor: "#5EBE00"
  }
];

class Home extends React.Component {
  static navigationOptions = {
    title: "主页",
    headerStyle: {
      backgroundColor: "#ffffff"
    },
    headerTintColor: "#4693ff",
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerMode: "none"
  };

  _openPage(cmpt) {
    const { navigate } = this.props.navigation;
    if (cmpt) {
      navigate(cmpt.cmptName);
    } else {
      alert("flag先立着，内容还的再等等..😊");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {FUNCS.map((category, i) => (
          <View
            style={[
              {
                backgroundColor: category.bgColor,
                borderColor: category.bgColor
              },
              styles.sbu_view
            ]}
            key={i}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              underlayColor={"#FA6778"}
              style={{ flex: 1 }}
              onPress={this._openPage.bind(this, category.cmpt)}
            >
              <View
                style={[
                  styles.sbu_flex,
                  {
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  styles.sbu_borderRight
                ]}
              >
                <Image
                  style={[styles.sbu_icon_img]}
                  resizeMode={"contain"}
                  source={category.iconPath}
                />
                <View style={{ height: 3 }} />
                <Text style={[styles.font18]}>{category.category}</Text>
              </View>
            </TouchableOpacity>

            <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.sub_con_flex,
                  styles.sub_text,
                  styles.sbu_borderBottom
                ]}
                onPress={this._openPage.bind(this, category.cmpt1)}
              >
                <Text style={[styles.font16]}>{category.subcate1}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.sub_con_flex, styles.sub_text]}
                onPress={this._openPage.bind(this, category.cmpt2)}
              >
                <Text style={[styles.font16]}>{category.subcate2}</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.sbu_flex]}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.sub_con_flex,
                  styles.sub_text,
                  styles.sbu_borderBottom
                ]}
                onPress={this._openPage.bind(this, category.cmpt3)}
              >
                <Text style={[styles.font16]}>{category.subcate3}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.sub_con_flex, styles.sub_text]}
                onPress={this._openPage.bind(this, category.cmpt4)}
              >
                <Text style={[styles.font16]}>{category.subcate4}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

export default Home;

class FlatListExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  _renderItem = item => {
    let item1 = item;
    let txt = "第" + item1.index + "个" + " title=" + item1.item.title;
    let bgColor = item1.index % 2 === 0 ? "red" : "blue";
    return (
      <TouchableOpacity
        onPress={() => {
          alert(txt);
        }}
      >
        <Text
          style={[
            {
              flex: 1,
              height: ITEM_HEIGHT,
              backgroundColor: bgColor,
              width: width / 3
            },
            styles.txt
          ]}
        >
          {txt}
        </Text>
      </TouchableOpacity>
    );
  };

  _header = () => {
    return (
      <Text style={[styles.txt, { backgroundColor: "black" }]}>这是头部</Text>
    );
  };

  _footer = () => {
    return (
      <Text style={[styles.txt, { backgroundColor: "black" }]}>这是尾部</Text>
    );
  };
  _separator = () => {
    return <View style={{ height: 2, backgroundColor: "yellow" }} />;
  };

  _onRefresh() {
    // alert("正在刷新中.... ");
  }

  render() {
    let data = [];
    for (let i = 0; i < 31; i++) {
      data.push({ key: i, title: i + "" });
    }
    return (
      <View style={{ flex: 1 }}>
        <Button
          title="滚动到指定位置"
          onPress={() => {
            //this._flatList.scrollToEnd();
            //this._flatList.scrollToIndex({viewPosition:0,index:8});
            this._flatList.scrollToOffset({ animated: true, offset: 1000 });
          }}
        />
        <View style={{ flex: 1 }}>
          <FlatList
            ref={flatList => (this._flatList = flatList)}
            ListHeaderComponent={this._header}
            ListFooterComponent={this._footer}
            ItemSeparatorComponent={this._separator}
            renderItem={this._renderItem}
            horizontal={false}
            numColumns={3}
            columnWrapperStyle={{ borderWidth: 2, borderColor: "black" }}
            refreshing={this.state.refreshing}
            getItemLayout={(data, index) => ({
              length: ITEM_HEIGHT,
              offset: (ITEM_HEIGHT + 2) * index,
              index
            })}
            onRefresh={this._onRefresh}
            onEndReachedThreshold={0.1}
            onEndReached={info => {
              // alert("滑动到底部了");
            }}
            onViewableItemsChanged={info => {
              //    alert("可见不可见触发");
            }}
            data={data}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingTop: 5
  },

  // sbu
  sbu_view: {
    height: 155,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "row"
  },
  sbu_flex: {
    flex: 1
  },
  sbu_borderRight: {
    borderColor: "#fff",
    borderRightWidth: 0.5
  },
  sbu_icon_img: {
    height: 55,
    width: 60
  },
  sub_con_flex: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  sub_text: {
    justifyContent: "center"
  },
  font16: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold"
  },
  font18: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold"
  },
  sbu_borderBottom: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#fff"
  },

  txt: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontSize: 30
  }
});
