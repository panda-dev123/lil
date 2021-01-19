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

    background: {
        resizeMode: 'contain',
        position: 'absolute',
        width: '100%',
        height: '70%',
        bottom: -10,
       // bottom: -50 - Constants.statusBarHeight,
        left: Platform.OS == 'ios' ? -25 : -10,
    },

    subtitle: {
        fontSize: 16,
        color: color.white,
        fontFamily: 'regular',
        paddingBottom: 10,
        lineHeight: width * 0.055
    }
})