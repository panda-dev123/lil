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

    second: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    dateContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: color.gradiend_1
    },

    dateText: {
        textAlign: 'center',
        fontSize: 20, 
        paddingTop: 5
    }
})