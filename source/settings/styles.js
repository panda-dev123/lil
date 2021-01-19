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

    top: {
        alignItems: 'center',
        marginTop: width * 0.05
    },

    profile: {
        height: 100,
        width: 100,
    },

    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        resizeMode: 'cover'
    },

    upload: {
        width: 30, height: 30,
        backgroundColor: color.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30, paddingTop: 1,
        position: 'absolute', right: -5,
        bottom: -5
    },

    nameContainer: {
        flexDirection: 'row',
        marginVertical: width * 0.05,
        justifyContent: 'center',
        alignItems: 'center'
    },

    name: {
        fontFamily: 'black',
        fontSize: 19,
        color: color.white,
        textTransform: 'uppercase'
    },

    editName: {
        paddingLeft: 5,
        marginTop: -3
    },

    profileContainer: {
        backgroundColor: color.white,
        padding: width * 0.05,
        borderRadius: 15,
        marginHorizontal: width * 0.05
    },

    closeProfile: {
        position: 'absolute',
        top: 5,
        right: 5,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        paddingVertical: width * 0.03,
        fontFamily: 'black',
        color: color.gradiend_1,
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'uppercase'
    },

    buttonContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingTop: width * 0.05
    },

    passwordText: {
        fontSize: 19,
        color: color.white,
        fontFamily: 'regular',
        marginTop: 10
    },

    inputContainer: {
        paddingVertical: 10
    }
})