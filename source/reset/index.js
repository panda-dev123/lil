import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
    Text, 
    View, 
    ImageBackground, 
    Dimensions, 
    Image, 
    TouchableHighlight, 
    TouchableOpacity, 
    ScrollView 
} from 'react-native';

import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

var { width, height } = Dimensions.get('window');
import styles from './styles'
import common from '../common/global';

import color from '../common/color';
 

export default class Reset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }

    render() {
        const { email } = this.state;
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/bg-3.png')} style={common.background}>
                
                    <StatusBar style="light" />
    
                    <View style={common.backContainer}>
                        <TouchableHighlight underlayColor="transparent" onPress={ ()=> navigation.goBack()}>
                            <MaterialCommunityIcons name="chevron-left" size={35} color={color.white} />
                        </TouchableHighlight>
                    </View>

                        <View style={common.main}>
                            <View style={common.logoContainer}>
                                <Image source={require('../../assets/logo.png')} style={common.logo} />
                            </View>

                            <Text style={styles.title}>FORGOT YOUR PASSWORD?</Text>
                            <Text style={styles.subtitle}>Please enter your email address. You will receive a code via email</Text>

                            <FloatingLabelInput
                                label={'Email'}
                                value={email}
                                keyboardType={'email-address'}
                                autoCapitalize={'none'}
                                onChangeText={(value) => this.setState({ email: value })}
                                inputStyles={common.input}
                                customLabelStyles={[common.customLabe]}
                                labelStyles={common.label}
                            />
                            
                            <View style={styles.buttonContainer}>
                                <Button
                                    title="RESET PASSWORD"
                                    titleStyle={common.buttonTitle}
                                    buttonStyle={common.button}
                                />
                            </View>
                        </View>
                        
                </ImageBackground>
            </View>
        )
    }
}
