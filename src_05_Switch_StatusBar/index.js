import React, { Component } from 'react'
import { Text, StyleSheet, View,StatusBar ,Switch} from 'react-native'

export default class index extends Component {
    constructor(){
        super()
        this.state = {
            hideStatusBar: false
        }
    }

    toggleStatusBar = ()=>{
        this.setState({
            hideStatusBar:!this.state.hideStatusBar
        })
    }
  render() {
    return (
      <View style = {[styles.container]}>
        <StatusBar 
            hidden = {this.state.hideStatusBar}
            backgroundColor = 'red'//仅在安卓下有效
            barStyle={'dark-content'}
        />
        <Text> textInComponent </Text>
        <Switch
          trackColor={{true:'red'}}
          thumbColor={this.state.hideStatusBar ? "red" : "green"}
          value = {this.state.hideStatusBar}
          onValueChange = {this.toggleStatusBar}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})