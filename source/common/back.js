import React from 'react';
import {
    Platform,
    StatusBar,
    Text,
    View,
    Dimensions,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';

var { width, height } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';
import { Header, Badge, } from 'react-native-elements';
import Constants from 'expo-constants';
import color from './color'


export default class HeaderBack extends React.Component {
    render() {
        return (
            <Header
                statusBarProps={{ barStyle: 'light-content',  backgroundColor: color.gradiend_1  }}
                leftComponent={
                    <TouchableHighlight underlayColor="transparent" onPress={this.props.onMenu}>
                        <Ionicons name="chevron-back-sharp" size={30} color={color.white} />
                    </TouchableHighlight>
                }
                centerComponent={
                    <View style={styles.navigation}>
                        {this.props.icon &&
                            <Image source={this.props.icon} style={styles.logo} />
                        }
                        <Text style={[styles.title, this.props.titleStyle]}>{this.props.title}</Text>
                    </View>
                }
                containerStyle={[this.props.style, {
                    backgroundColor: 'transparent',
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
        paddingTop: 2,
    },

    logo: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
        marginRight: width * 0.03
    },

    title: {
        color: color.white,
        fontFamily: 'black',
        fontSize: 23,
        marginTop: Platform.OS == 'ios' ? 8 : -5,
        textTransform: 'uppercase',
    }
})


