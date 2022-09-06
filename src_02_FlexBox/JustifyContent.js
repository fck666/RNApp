import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class JustifyContent extends Component {
  render() {
    return (
      <View>
        <Text style = {[styles.h2]}> 主轴方向 </Text>
      <ScrollView>
      <Text style = {[styles.h3]}> flexDirection: 'row'</Text>
        <View style = {[styles.container,styles.flexRow,styles.justifyContentStart]}>
          <Text style = {[styles.itemBase]}>111</Text>
          <Text style = {[styles.itemBase]}>222</Text>
          <Text style = {[styles.itemBase]}>333</Text>
        </View>
        <Text style = {[styles.h3]}> flexDirection: 'row'</Text>
        <View style = {[styles.container,styles.flexRow,styles.justifyContentEnd]}>
          <Text style = {[styles.itemBase]}>111</Text>
          <Text style = {[styles.itemBase]}>222</Text>
          <Text style = {[styles.itemBase]}>333</Text>
        </View>
        <Text style = {[styles.h3]}> flexDirection: 'row'</Text>
        <View style = {[styles.container,styles.flexRow,styles.justifyContentCenter]}>
          <Text style = {[styles.itemBase]}>111</Text>
          <Text style = {[styles.itemBase]}>222</Text>
          <Text style = {[styles.itemBase]}>333</Text>
        </View>
        <Text style = {[styles.h3]}> flexDirection: 'row'</Text>
        <View style = {[styles.container,styles.flexRow,styles.justifyContentAround]}>
          <Text style = {[styles.itemBase]}>111</Text>
          <Text style = {[styles.itemBase]}>222</Text>
          <Text style = {[styles.itemBase]}>333</Text>
        </View>
        <Text style = {[styles.h3]}> flexDirection: 'row'</Text>
        <View style = {[styles.container,styles.flexRow,styles.justifyContentEvenly]}>
          <Text style = {[styles.itemBase]}>111</Text>
          <Text style = {[styles.itemBase]}>222</Text>
          <Text style = {[styles.itemBase]}>333</Text>
        </View>
        <Text style = {[styles.h3]}> flexDirection: 'row'</Text>
        <View style = {[styles.container,styles.flexRow,styles.justifyContentBetween]}>
          <Text style = {[styles.itemBase]}>111</Text>
          <Text style = {[styles.itemBase]}>222</Text>
          <Text style = {[styles.itemBase]}>333</Text>
        </View>
      </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
      height: 150,
      margin: 10,
      borderWidth: 1,
      borderColor: '#ddd'
  },
  h2:{
      fontSize: 30,
      marginHorizontal: 10,

  },
  h3:{
      fontSize: 24,
      marginHorizontal:10
  },
  itemBase:{
    height: 30,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#dfb',
    padding: 4,
    textAlign: 'center'
  },
  flexColumn:{
    flexDirection: 'column'
  },
  flexColumnReverse:{
    flexDirection: 'column-reverse'
  },
  flexRow:{
    flexDirection: 'row'
  },
  flexRowReverse:{
    flexDirection: 'row-reverse'
  },
  justifyContentStart:{
    justifyContent: 'flex-start'
  },
  justifyContentCenter:{
    justifyContent: 'center'
  },
  justifyContentEnd:{
    justifyContent: 'flex-end'
  },
  justifyContentAround:{
    justifyContent: 'space-around'
  },
  justifyContentEvenly:{
    justifyContent: 'space-evenly'
  },
  justifyContentBetween:{
    justifyContent: 'space-between'
  }
})
