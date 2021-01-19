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
        flexDirection: 'row',
        marginTop: Constants.statusBarHeight - 5
    },

    topLeft: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: -10
    },

    topRight: {
        flex: 1,
        alignItems: 'flex-end',
    },

    datenav: {
        flexDirection: 'row',
        paddingHorizontal: width * 0.05,
        paddingTop: 30,
        paddingBottom: 20
    },

    dateLeft: {
        flex: 1,
    },

    dateRight: {
        flex: 1,
        alignItems: 'flex-end'
    },

    title: {
        color: color.gradiend_1,
        fontFamily: 'black',
        fontSize: 20,
        textTransform: 'uppercase'
    },

    date: {
        color: color.gradiend_1,
        fontFamily: 'regular',
        fontSize: 18
    },

    commentnav: {
        flexDirection: 'row',
        paddingHorizontal: width * 0.05,
        marginBottom: 20
    },

    commentLeft: {
        flex: 1,
    },

    commentRight: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    commentBoxButton: {
        backgroundColor: color.grey_3,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    commentBoxButtonTitle: {
        fontFamily: 'regular',
        padding: 10,
        paddingTop: Platform.OS == 'ios' ? 15 : 10,
        fontSize: 15
    },

    descriptionContainer: {
        paddingTop: 0,
        paddingHorizontal: width * 0.05,
        paddingBottom: width * 0.1
    },

    description: {
        fontFamily: 'regular',
        fontSize: 17,
        lineHeight: 20
    },

    shareContainer: {
        flexDirection: 'row',
        padding: width * 0.05
    },

    shareBox: {
        flex: 1,
        alignItems: 'center'
    },

    shareBG: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },

    modal: {
        margin: 0,
        marginTop: Platform.OS == 'ios' ? height * 36/100 : height * 36/100 - Constants.statusBarHeight,
        flex: 1,
    },

    modal_inner: {
        backgroundColor: color.white,
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },

    commentBox: {
        flexDirection: 'row',
        marginHorizontal: width * 0.05,
        borderBottomColor: color.grey_3,
        borderBottomWidth: 1,
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

    commentList: {
        flexDirection: 'row',
        marginHorizontal: width * 0.05,
        paddingVertical: 15,
        borderColor: color.grey_3,
    },

    commentListLeft: {
        flex: 0.3, justifyContent: 'center'
    },

    commentListUser: {
        width: 60, height: 60, borderRadius: 10
    },

    commentListRight: {
        flex: 1, justifyContent: 'center', paddingLeft: 5
    },

    commentTitle: {
        color: color.black,
        fontFamily: 'black',
        fontSize: 20
    },

    commentDes: {
        color: color.grey_5,
        fontFamily: 'regular',
        fontSize: 18
    },

    commentListFav: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})