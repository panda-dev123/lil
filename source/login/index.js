import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
    Text, 
    View, 
    ImageBackground, 
    Dimensions, 
    Image, 
    TouchableOpacity, 
    ScrollView 
} from 'react-native';

import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Button } from 'react-native-elements';
var { width, height } = Dimensions.get('window');
import styles from './styles'
import common from '../common/global';
import { LinearGradient } from 'expo-linear-gradient';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }


    render() {
        const { email, password } = this.state;
        const { navigation } = this.state;
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={['#2D142C', '#2D142C', '#510A32' ]}
                    style={common.overlay}
                >
                    <ScrollView bounces={true} showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: width * 0.05}}
                        >
                        
                        <View style={common.logoContainer}>
                            <Image source={require('../../assets/logo.png')} style={common.logo} />
                        </View>

                        <View style={styles.inputContainer}>
                            <FloatingLabelInput
                                label={'Email'}
                                value={email}
                                onChangeText={(value) => this.setState({ email: value })}
                                inputStyles={common.input}
                                customLabelStyles={[common.customLabe]}
                                labelStyles={common.label}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <FloatingLabelInput
                                label={'Password'}
                                value={password}
                                isPassword
                                onChangeText={(value) => this.setState({ password: value })}
                                inputStyles={common.input}
                                customLabelStyles={[common.customLabel]}
                                labelStyles={common.label}
                            />
                        </View>

                        <TouchableOpacity activeOpacity={0.9} style={{ alignItems: 'flex-end' }} onPress={() => this.props.navigation.navigate('Reset')}>
                            <Text style={styles.forget}>Forgot your password?</Text>
                        </TouchableOpacity>

                        <View style={styles.buttonContainer}>
                            <Button
                                title="LOGIN"
                                titleStyle={common.buttonTitle}
                                buttonStyle={common.button}
                                onPress={() => this.props.navigation.navigate('Menu')}
                            />
                            <Button
                                title="LOGIN AS GUEST"
                                titleStyle={common.buttonTitle}
                                buttonStyle={[common.button]}
                            />
                        </View>

                        <View style={styles.loginWithContainer}>
                            <Text style={styles.loginWith}>- Or login with -</Text>
                            <View style={[styles.nav]}>
                                <View style={styles.box}>
                                    <TouchableOpacity activeOpacity={0.7} style={styles.innerBox}>
                                        <Image source={require('../../assets/facebook.png')} style={styles.social} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.box}>
                                    <TouchableOpacity activeOpacity={0.7} style={styles.innerBox}>
                                        <Image source={require('../../assets/google.png')} style={styles.social} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.box}>
                                    <TouchableOpacity activeOpacity={0.7} style={styles.innerBox}>
                                        <Image source={require('../../assets/apple.png')} style={styles.social} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.accountBox}>
                                <Text style={styles.account}>Don't have an account? </Text>
                                <TouchableOpacity style={styles.signupBox} activeOpacity={0.9} onPress={() => this.props.navigation.navigate('Register')} >
                                    <Text style={[styles.signup]}>SIGN UP</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </LinearGradient>
            </View>
        )
    }
}
