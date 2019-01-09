/**
 * Created by Dennis Wang
 * on 2019-01-08 14:31
 */
import React from "react";
import { Image } from "react-native";

const colors = [
  "#ff7d31",
  "#86ff2e",
  "#4693ff",
  "#8d41ff",
  "#ff44d7",
  "#fff641",
  "#ff3934"
];

const getHeartColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

/**
 * @class HeartShape
 */

const HeartShape = ({ color }) => {
  return (
    <Image
      source={require("../images/heart.png")}
      style={{
        tintColor: color ? color : getHeartColor()
      }}
    />
  );
};

/**
 * Exports
 */

export default HeartShape;
