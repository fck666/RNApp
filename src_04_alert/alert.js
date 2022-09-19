import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert, Button, TouchableOpacity } from 'react-native'

export default class alert extends Component {
    createTwobuttonAlert = () =>{
        Alert.alert(
            "警告标题",
            "警告内容",[
                {
                    text:"取消",
                    onPress:()=>console.log('cancel'),
                    style:'cancel'
                },
                {
                    text:"确定",
                    onPress:()=>console.log('OK'),
                    style:'default'
                }
            ]
        )
    }
    createTwobuttonAlert = () =>{
        Alert.alert(
            "更新",
            "是否现在更新",[
                
                {
                    text:"取消",
                    onPress:()=>console.log('cancel'),
                    style:'cancel'
                },
                {
                    text:"确定",
                    onPress:()=>console.log('OK'),
                    style:'default'
                },
                {
                    text:"稍后再试",
                    style:'destructive',
                    onPress:()=>console.log('wait'),
                }
            ]
        )
    }
    render() {
        return (
            <View style={[styles.container]}>
                <Button style={styles.touchButton}
                    title="alert"
                    onPress={
                        () => {
                            alert('我是一个按钮')
                        }}
                />
                <TouchableOpacity style={styles.touchButton}
                    onPress={() => {
                        alert('TouchableOpacity')
                    }}>
                    <Text style={styles.touchButtonText}>点击按钮1</Text>
                </TouchableOpacity>
                <Button style={styles.touchButton}
                    title="alert"
                    onPress={
                        () => {
                            Alert.alert('我是一个按钮')
                        }}
                />
                <Button style={styles.touchButton}
                    title="createThreeButton"
                    onPress={this.createTwobuttonAlert}
                    color = 'black'
                    />
                        
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center'
    },
    touchButton: {
        height: 40,
        width: 100,
        borderRadius: 20,
        backgroundColor: '#fa1faa',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    touchButtonText: {
        color: 'white',
        textAlign: 'center',
    }
})
