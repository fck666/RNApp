import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
// import Index from "./src_01_StyleSheet"; 
// import Index from "./src_02_FlexBox/FlexDriection";
// import Index from "./src_02_FlexBox/JustifyContent";
// import Index from "./src_02_FlexBox/AlignItems";
import Index from './src_03_Dimension/index';
import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';

export default class App extends Component {
  render(){
    return(
         <Index />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
