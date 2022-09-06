import React, { Component } from 'react'
import { StyleSheet ,Text, View } from 'react-native'

export default class index extends Component {
  render() {
    return (
      <View>
        <Text style = {[{fontSize: 30},{fontStyle: 'italic'}]}> textInComponent </Text>
        <Text style = {styles.h1}>Hello RN</Text>
        <Text style = {styles.h2}>Hello RN</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    h1:{
        fontSize: 50,
        fontWeight: '500'
    },
    h2:{
        fontSize: 30,
        fontWeight:'bold'
    }
})
