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
        fontFamily: 'regular'
    },

    buttonContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop: width * 0.1,
    },

    loginWithContainer: {
        justifyContent:'center',
        alignItems:'center',
    },
 

    nav: {
        flexDirection:'row', 
        paddingTop: 10,
        paddingBottom: width * 0.15
    },

    box: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',   
    },

    link: {
        color: color.white,
        fontFamily: 'regular',
        textDecorationLine:'underline',
        paddingLeft: 15,
        fontSize: 18
    },

    signup: {
        color: color.red,
        fontFamily: 'bold',
        fontSize: 18,
        textDecorationLine:'underline'
    },

    account: {
        color: color.white,
        fontSize: 18,
        fontFamily: 'regular', 
    },

    accountBox: {
        paddingVertical: width * 0.05, 
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },

    signupBox: {
        paddingLeft: 3,
        paddingTop: 2
    }
})