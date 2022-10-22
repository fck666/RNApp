import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, SafeAreaView, Platform } from 'react-native'

export default class index extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView
                    style={{ backgroundColor: '#dfb' }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <Text style={[styles.nav]}>体育</Text>
                    <Text style={[styles.nav]}>体育</Text>
                    <Text style={[styles.nav]}>体育</Text>
                    <Text style={[styles.nav]}>体育</Text>
                    <Text style={[styles.nav]}>体育</Text>
                    <Text style={[styles.nav]}>体育</Text>
                </ScrollView>
                <ScrollView
                    style={[styles.scrollview]}
                    contentContainerStyle={{ margin: 30 }}
                    showsVerticalScrollIndicator={true}
                >
                    <Text style={[styles.text]}> 页面
                        博文
                        空间快捷链接
                        File lists
                        回顾
                        页面树结构
                        APP组
                        APP问题分析
                        File lists
                        OKR
                        业务文档专区
                        产品清单
                        产品运营
                        人员流动工作交接文档
                        会议记录
                        回顾
                        回顾记录
                        工程待优化事务
                        常见问题
                        干货分享
                        Android技术分享
                        iOS快速入门课程
                        iOS技术分享
                        NODE 团队分享
                        React Native课程技术分享
                        元宇宙
                        前端技术分享
                        安卓课程技术分享
                        废弃页面
                        程序员综合能力分享
                        终端图书一角
                        终端工程
                        通识技术分享
                        Alias & Dotfiles
                        ELK搭建
                        fork&pull-request流程
                        FreeMarker快速入门
                        GIT命令行工具配置
                        HTTP code代码字典对照表
                        IMService数据库迁移
                        linux dns 缓存
                        nodejs-mongodb快速上手
                        nodejs搭建和服务部署
                        node-rdkafka使用说明
                        前端系统运维
                        开思小马环境搭建和配置
                        我的工作空间——任务和Bug
                        日志转储 logrotate
                        测试分享
                        消息中心优化
                        成长天地
                        技术方案
                        文档模板
                        日常开发效率提升小技巧
                        模块责任田
                        流程建设
                        测试专区
                        终端UI自动化
                        通用规范
                    </Text>
                    {/* 解决在安卓中无法滚动到底的问题*/ }
                    <View style = {{height: Platform.OS === 'ios' ? 0 :70}}></View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    scrollview: {
        backgroundColor: '#ddd',
        marginHorizontal: 20
    },
    nav: {
        margin: 10,
        height: 50,
        fontSize: 30
    }
})
