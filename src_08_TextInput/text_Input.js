import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions,Button } from 'react-native'

export default class text_Input extends Component {
    constructor(){
        super()
        this.state = {
            username:'',
            password:''
        }
    }
    doLogin = ()=>{
        alert(this.state.username)
    }
  render() {
    return (
      <View style= {[styles.container]}>
        <TextInput 
        style = {[styles.Input]}
        placeholder = "请输入用户名"
        value={this.state.username}
        onChangeText = {(val)=>{
            this.setState({
                username:val
            })
        }}
        />
        <TextInput 
        style = {[styles.Input]}
        placeholder = "请输入密码"
        value={this.state.password}
        secureTextEntry={true}
        onChangeText = {(val)=>{
            this.setState({
                password:val
            })
        }}
        />
        <TextInput 
        style = {[styles.Input]}
        placeholder = "请输入手机号"
        keyboardType='number-pad'
        />  
        <TextInput 
        style = {[styles.InputMuti]}
        placeholder = "请输入自我介绍"
        // keyboardType='number-pad'
        multiline = {true}
        numberOfLines={5}
        // textAlignVertical=""
        />
        <View style = {[styles.but]}>
            <Button title = "登录" onPress={this.doLogin} color = 'white'/>
        </View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    Input:{
        width:Dimensions.get('window').width - 20,
        margin:10,
        borderWidth:1,
        borderColor:'red',
        paddingHorizontal:5,
        height:40
    },
    InputMuti:{
        width:Dimensions.get('window').width - 20,
        margin:10,
        borderWidth:1,
        borderColor:'red',
        paddingHorizontal:5,
        height:100
    },
    but:{
        backgroundColor:'blue',
        width:Dimensions.get('window').width - 50
    }
})
