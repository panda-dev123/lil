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

    topContainer: {
        marginVertical: 20,
        alignItems: 'center',
    },

    inner: {
        width: width / 4 - 30,
        height: width / 4 - 30,
        marginHorizontal: 10,
    },

    profile: {
        height: '100%',
        width: '100%',
        borderRadius: 100,
        borderColor: color.white
    },

    name: {
        color: color.white,
        paddingVertical: 10
    },

    thumb: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: 'white',
    },

    radioBanner: {
        width: width - width * 0.1,
        resizeMode: 'cover',
        height: height * 40 / 100,
    },

    liveBanner: {
        width: width,
        resizeMode: 'cover',
        height: Platform.OS == 'android' ?  height - 70 - (width / 4 + 30 + 110 - Constants.statusBarHeight) :  
        height - 70 - (width / 4 + 30 + 110),
    },

    livePlay: {
        width: width,
        resizeMode: 'cover',
        height: Platform.OS == 'android' ? height + Constants.statusBarHeight +10 : height
    },

    sliderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },

    slider: {
        width: 200, resizeMode: 'contain',
    },

    bar: {
        width: '320%',
        height: 30,
        transform: [{ scaleX: 0.3 }, { scaleY: 0.3 }]
    },

    playerContainer: {
        flexDirection: 'row', marginVertical: 20
    },

    playerSide: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    sound: {
        width: 35,
        resizeMode: 'contain',
        height: 35
    },

    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    seek: {
        width: 20, resizeMode: 'contain',
        height: 20
    },

    play: {
        width: 60,
        resizeMode: 'contain',
        marginHorizontal: 20,
        height: 60
    },

    fav: {
        backgroundColor: color.white,
        height: 35, width: 35,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    liveTop: {
        position: 'absolute',
        width: width,
        top: 15,
        right: 15,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.white,
        width: 70, height: 35,
        borderRadius: 50
    },

    count: {
        marginLeft: 5,
        fontSize: 15,
        color: color.gradiend_1,
        fontFamily: 'avenir'
    },

    commentBox: {
        flexDirection: 'row',
        marginHorizontal: width * 0.05,
        borderBottomColor: color.grey_3,
        paddingBottom: 20
    },

    userSelf: {
        width: 45, height: 45, borderRadius: 10
    },

    commentTextBox: {
        flex: 1, justifyContent: 'center', paddingLeft: 5
    },

    commentInput: {
        backgroundColor: color.grey_3,
        height: 40,
        borderRadius: 5,
        padding: 10,
        paddingTop: 12,
        fontFamily: 'avenir'
    },

})