import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    TouchableHighlight,
    Text,
    View,
    ImageBackground,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import common from '../common/global';
import color from '../common/color';
var { width, height } = Dimensions.get('window');

import styles from './styles'
import Header from '../common/header';

export default class OTP extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>

                <ImageBackground source={require('../../assets/bg-3.png')} style={common.background}>
                    <StatusBar style="light" />
                   
                    <View style={common.backContainer}>
                        <TouchableHighlight underlayColor="transparent" onPress={() => navigation.goBack()}>
                            <MaterialCommunityIcons name="chevron-left" size={35} color={color.white} />
                        </TouchableHighlight>
                    </View>


                    <View style={common.logoContainer}>
                        <Image source={require('../../assets/logo.png')} style={common.logo} />
                    </View>

                    <View style={common.main}>
                        <Text style={styles.title}>VERIFICATION</Text>
                        <Text style={styles.subtitle}>Please type the verification code sent to lelwatan@gmail.com</Text>


                        <OTPTextView
                            handleTextChange={(e) => { }}
                            containerStyle={styles.textInputContainer}
                            textInputStyle={styles.roundedTextInput}
                            defaultValue="38"
                            tintColor={color.white}
                            offTintColor={color.white}
                        />

                        
                        <View style={styles.buttonContainer}>
                            <Text style={styles.send}>Didn't receive code?</Text>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Text style={styles.now}>RESEND NOW</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ImageBackground>


            </View>
        )
    }
}
