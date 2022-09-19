import React, { Component } from 'react'
import { Text, StyleSheet, View ,ActivityIndicator,Platform} from 'react-native'

export default class ActivityIndicators extends Component {
  render() {
    if(Platform.OS === 'android'){
        alert('当前是安卓应用')
    }else if(Platform.OS === 'ios'){
        alert('当前是iOS应用')
    }
    return (
        //数字指定大小在iOS下无效
      <View style = {[styles.container]}>
        <ActivityIndicator color={"blue"} size = {'small'}/>
        <ActivityIndicator color={"blue"} size = {'large'}/>
        <ActivityIndicator color={"blue"} size = {100}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
