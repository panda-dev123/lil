import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Button } from 'react-native-elements';

var { width, height } = Dimensions.get('window');

import styles from './styles'
import common from '../common/global';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 2000)
    }


    render() {
        const { email, password } = this.state;
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={['#2D142C', '#2D142C', '#510A32']}
                    style={[common.overlay, {
                        justifyContent: 'center',
                        alignItems: 'center'
                    }]}
                >

                    <StatusBar style="light" backgroundColor={'#2D142C'}/>
                    <Image source={require('../../assets/logo.png')} style={common.logo} />

                </LinearGradient>


            </View>
        )
    }
}
