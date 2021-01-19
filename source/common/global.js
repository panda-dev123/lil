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
    background: {
        flex: 1,
        width: width,
    },

    overlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: height + Constants.statusBarHeight + 10,
    },

    bottomImgae: {
        resizeMode: 'contain',
        position: 'absolute',
        width: '100%',
        height: '70%',
        bottom: -10,
       // bottom: -50 - Constants.statusBarHeight,
        left: Platform.OS == 'ios' ? -25 : -10,
    },

    main: {
        paddingHorizontal: width * 0.05,
        alignItems: 'center'
    },

    backContainer: {
        left: 5,
        top: Constants.statusBarHeight + 10,
        position: 'absolute',
        height: 40,
        width: 40,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        zIndex: 9
    },

    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: width * 0.15
    },

    logo: {
        resizeMode: 'contain',
        height: width * 0.4,
        width: width * 0.4
    },

    input: {
        color: color.white,
        fontFamily: 'medium',
        fontSize: 20,
        borderBottomColor: color.red,
        paddingTop: 10,
        height: 45
    },

    inputContainer: {
        flexDirection: 'row',
        color: '#49658c',
        borderBottomWidth: 2,
        borderColor: color.white,
        borderRadius: 0,
        backgroundColor: '#00000000',
        paddingTop: 10,
        paddingBottom: 0,
        alignContent: 'center',
        justifyContent: 'center',
    },

    editInputContainer: {
        flexDirection: 'row',
        color: '#49658c',
        borderBottomWidth: 2,
        borderColor: color.gradiend_1,
        borderRadius: 0,
        backgroundColor: '#00000000',
        paddingTop: 10,
        paddingBottom: 0,
        alignContent: 'center',
        justifyContent: 'center',
    },

    inputEdit: {
        color: color.gradiend_1,
        fontFamily: 'medium',
        fontSize: 20,
        borderBottomColor: color.red,
        paddingTop: 10,
        height: 43
    },

    customLabel: {
        color: color.white,
    },

    label: {
        color: color.white,
        fontFamily: 'medium',
        left: 0
    },

    button: {
        backgroundColor: color.white,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 5,
        width: width * 0.8,
        marginBottom: 15
    },

    buttonTitle: {
        color: color.button,
        fontSize: 20,
        paddingTop: Platform.OS == 'ios' ? 8 : 0,
        fontFamily: 'medium'
    },

    searchInputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 15,
        marginVertical: 20,
        borderRadius: 10,
        paddingRight: 5
    },

    searchInput: {
        flex: 1,
        paddingTop: 12,
        paddingRight: 5,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        borderRadius: 10,
        fontSize: 18, fontFamily: 'avenir',
        color: color.gradiend_1
    },

    searchContainer: {
        backgroundColor: color.gradiend_1,
        borderWidth: 0
    },

    boxHeader: {
        flexDirection: 'row',
        paddingHorizontal: 18,
        marginVertical: 10,
        justifyContent:'center'
    },

    boxHeaderLeft: {
        flex: 1,
        alignItems: 'flex-start',
    },

    boxHeaderRight: {
        flex: 1,
        alignItems: 'flex-end',
    },

    boxTitle: {
        fontFamily: 'black',
        color: color.white,
        fontSize: 20,
        textTransform: 'uppercase'
    },

    showAll: {
        fontFamily: 'light',
        color: color.white,
        fontSize: 18,
        textTransform: 'capitalize'
    },

    boxImage: {
        height: Platform.OS == 'ios' ? 210 : 230,
        backgroundColor: '#F5F6FA',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: 'space-between',
        position: 'relative',
        width: width - 80,
    },

    boxOverlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: width - 80,
        position: 'absolute',
        bottom: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: Platform.OS == 'ios' ? 15 : 10,
    },

    boxOverlayTitle: {
        color: color.white,
        fontFamily: 'bold',
        fontSize: 19,
    },

    boxOverlayTime: {
        color: color.white,
        fontFamily: 'regular',
        fontSize: 15,
        paddingTop: 5
    },

    tabTitle: {
        width: 150,
        textAlign:'center',
        color: color.white,
        fontSize: 18,
        textTransform: 'capitalize',
    },

    tabContainer: {
        backgroundColor: color.gradiend_1,
        borderBottomColor: color.white,
        borderBottomWidth: 1
    },

    tabIndicator: {
        backgroundColor: color.white, 
        height: 2 ,
    }
})