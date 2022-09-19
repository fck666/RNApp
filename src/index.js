import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {DrawerNavigator,TabNavigator,StackRouter,StackNavigator} from 'react-navigation'
import StyleSheets from "../src_01_StyleSheet/StyleSheets"; 
import FlexDriection from "../src_02_FlexBox/FlexDriection";
import JustifyContent from "../src_02_FlexBox/JustifyContent";
import AlignItems from "../src_02_FlexBox/AlignItems";
import Dimension from '../src_03_Dimension/Dimension';
import alert from '../src_04_alert/alert';
import Switch_StatusBar from '../src_05_Switch_StatusBar/Switch_StatusBar';
import ActivityIndicators from '../src_06_ActivityIndicator/ActivityIndicators';
import images from '../src_07_Image/Images';

export default class index extends Component {
   static navigationOptions = {    //上标题
        title: 'title',
   };
  render() {
    const { navigation } = this.props;
    return (
      <MyNavigator/>
    )
  }
}

const MyNavigator = StackNavigator({
    p1: {screen: StyleSheets},
    p2: {screen: FlexDriection},
    p3: {screen: JustifyContent},
    p4: {screen: AlignItems},
    p5: {screen: Dimension},
    p6: {screen: alert},
    p7: {screen: Switch_StatusBar},
    p8: {screen: ActivityIndicators},
    p9: {screen: images},
},{
    initialRouteName:'p1',
})
