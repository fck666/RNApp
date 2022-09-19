import React, { Component } from 'react'
import { Text, StyleSheet, View ,Dimensions} from 'react-native'

export default class Dimension extends Component {
    render() {
        return (
            <View style = {[styles.container]}>
                <View style = {[styles.itemBase]}>
                    <Text style = {[styles.h3]}> 付款吗 </Text>
                </View >
                <View style = {[styles.itemBase]}>
                    <Text style = {[styles.h3]}> 扫一扫 </Text>
                </View>
                <View style = {[styles.itemBase]}>
                    <Text style = {[styles.h3]}> 卡包 </Text>
                </View>
                <View style = {[styles.itemBase]}>
                    <Text style = {[styles.h3]}> 出行 </Text>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        //控制项目是否换行
        flexWrap:'wrap'
    },
    itemBase:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00b38a',
        width: Dimensions.get('window').width/3,
        height:90,
        borderWidth:1,
        borderColor:'yellow'
    },
    h3:{
        fontSize:24
    }
})
