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

    calendar: {
        borderBottomWidth: 1,
        borderColor: 'rgba(254,254,254,0.5)',
        paddingBottom: 5,
        height: 350
    },

    list: {
        borderBottomColor: 'rgba(254,254,254,0.5)'
    },

    dot: {
        flex: 0.02,
        height: 7,
        width: 8,
        borderRadius: 10,
        backgroundColor: color.white,
        marginRight: 10,
        marginTop: 8
    },

    event: {
        color: color.white,
        fontFamily: 'bold',
        fontSize: 18,
        paddingTop: Platform.OS == 'ios' ? 5 : -8
    },

    time: {
        color: color.white,
        fontFamily: 'light',
        justifyContent: 'flex-end',
        fontSize: 18,
        paddingTop: 5
    },

    description: {
        color: color.white,
        fontFamily: 'regular',
        fontSize: 15,
        paddingVertical: 8,
        marginTop: Platform.OS == 'android' ? -5 : 0
    },

    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    language: {
        zIndex: 9999,
        position: 'absolute',
        top: Platform.OS == 'ios' ? 10 : -5,
        right: 0
    },

    lanImage: {
        width: 60,
        resizeMode: 'contain'
    },

    menuTitle: {
        color: color.gradiend_1,
        fontFamily: 'regular',
        paddingTop: 5
    },

    english: {
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: color.gradiend_1,
        marginHorizontal: 10
    },

    arabic: {
        height: 30,
        marginHorizontal: 10
    },

    eventContainer: {
        backgroundColor: color.white,
        padding: width * 0.05,
        borderRadius: 15,
        marginHorizontal: width * 0.05
    },

    title: {
        paddingVertical: width * 0.03,
        fontFamily: 'black',
        color: color.gradiend_1,
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'uppercase',  
    },

    eventHeader: {
        color: color.gradiend_1,
        fontFamily: 'regular',
        fontSize: 18, 
    },

    eventDescription: {
        color: color.gradiend_1,
        fontFamily: 'regular',
        fontSize: 14,
        paddingVertical: 5,
   
    },

    closeEvent: {
        position: 'absolute',
        top: 5,
        right: 5,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },


})