import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

const LoginScreen = ({}) => {
    return(
        <View style={styles.container}>
            <Text>
                Hey Login
            </Text>
        </View>
    )
}
export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',

    }
})