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

    title: {
        fontSize: 22,
        color: color.white,
        fontFamily: 'black',
        paddingTop: 5
    },

    subtitle: {
        fontSize: 18,
        color: color.white,
        fontFamily: 'regular',
        textAlign:'center',
        paddingVertical: 15,
        paddingHorizontal: width * 0.02,
        lineHeight: 19
    },

    buttonContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop: width * 0.1,
        paddingBottom: width * 0.05
    },
 
})