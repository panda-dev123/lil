import React from 'react';
import { Platform, StatusBar, Text, View, Dimensions, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Header, Badge, } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
var { width, height } = Dimensions.get('window');

import color from './color'



export default class HeaderFile extends React.Component {
    componentDidMount() {
        
    }
    render() {
        return (
            <Header
                statusBarProps={{ barStyle: 'light-content', backgroundColor: color.gradiend_1 }}
                leftComponent={
                    <TouchableHighlight underlayColor="transparent" onPress={this.props.onMenu}>
                        <Ionicons name="menu" size={30} color={color.white} />
                    </TouchableHighlight>
                }
                centerComponent={
                    <View style={styles.navigation}>
                        <Text style={[styles.title, this.props.titleStyle]}>{this.props.title}</Text>
                    </View>
                }
                containerStyle={[this.props.style, {
                    backgroundColor: color.gradiend_1,
                    borderBottomWidth: 0,
                }]}
            />
        )
    }
}

const styles = StyleSheet.create({
    navigation: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: width - 100,
    },

    title: {
        color: color.white,
        fontFamily: 'black',
        fontSize: 23,
        marginTop: Platform.OS == 'ios' ? 8 : -5,
        textTransform: 'uppercase',
    }
});


