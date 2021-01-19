'use strict';
import {
    StyleSheet,
    Dimensions,
    Platform
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import color from '../common/color';

var { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
    container: {
        flex: 1,
    },

    inputContainer: {
        paddingVertical: 10
    },

    forget: {
        fontSize: 19,
        color: color.white,
        fontFamily: 'regular',
        marginTop: 10
    },

    buttonContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop: width * 0.15,
        paddingBottom: width * 0.05
    },

    loginWithContainer: {
        justifyContent:'center',
        alignItems:'center',
        paddingTop: 10,
        paddingBottom: 20,
    },

    loginWith: {
        paddingVertical: 20,
        color: color.white,
        fontSize: 19,
        fontFamily: 'regular'
    },

    nav: {
        flexDirection:'row',
    },

    box: {
        width: 60,
        justifyContent:'center',
        alignItems:'center'
    },

    innerBox: {
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: color.white,
        borderRadius: 50,
        width: 40,
        height: 40
    },

    social: {
        resizeMode: 'contain',
        width: 25,
        height: 25
    },

    signup: {
        color: color.red,
        fontFamily: 'bold',
        textDecorationLine:'underline',
        fontSize: 18,
    },

    account: {
        color: color.white,
        fontSize: 19,
        fontFamily: 'regular'
    },

    accountBox: {
        paddingVertical: width * 0.08,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },

    signupBox: {
        paddingLeft: 3,
        paddingTop: 2
    }
})