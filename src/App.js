/**
 * Created by Dennis Wang
 * on 2019-01-09 16:37
 */
import React from "react";
import { AppRegistry, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import AppRouter from "./AppRouter";
import { name as appName } from "../app";

AppRegistry.registerComponent(appName, () =>
  createAppContainer(
    createStackNavigator(AppRouter, {
      initialRouteName: "Home",
      // headerMode: 'none',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#eb5639"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    })
  )
);
