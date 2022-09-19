import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image, Dimensions} from 'react-native'

export default class images extends Component {
  render() {
    return (
      <View style = {[styles.container]}>
        <Image 
           style={[styles.Item1]}
           source={require('./images/2.png')}
        />
        <Image
        style={styles.Item1}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Image
        style={styles.Item1}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    Item1: {
        height:200,
        width:Dimensions.get('window').width,
        marginVertical:20,
        // marginHorizontal:400
    }
})
