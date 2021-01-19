import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Button } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';

var { width, height } = Dimensions.get('window');

import styles from './styles'
import color from '../common/color';

import common from '../common/global';


export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            password: '',
            region: 'north'
        };
    }


    render() {
        const { name, email, phone, password } = this.state;
        const { navigation } = this.props;
        return (
            <View style={styles.container}>

                <LinearGradient
                    colors={[color.gradiend_3, color.gradiend_3, color.gradiend_4]}
                    style={common.overlay}
                >
                    <ScrollView showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: width * 0.05 }}
                    >

                        <View style={common.logoContainer}>
                            <Image source={require('../../assets/logo.png')} style={common.logo} />
                        </View>

                        <View style={styles.inputContainer}>
                            <FloatingLabelInput
                                label={'Full Name'}
                                value={name}
                                onChangeText={(value) => this.setState({ name: value })}
                                inputStyles={common.input}
                                customLabelStyles={[common.customLabe]}
                                labelStyles={common.label}
                            />
                        </View>

                        <View style={styles.inputContainer}>
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
                        </View>

                        <View style={styles.inputContainer}>
                            <FloatingLabelInput
                                label={'Phone Number'}
                                keyboardType={'phone-pad'}
                                mask="99/999999"
                                value={phone}
                                onChangeText={(value) => this.setState({ phone: value })}
                                inputStyles={common.input}
                                customLabelStyles={[common.customLabe]}
                                labelStyles={common.label}
                            />
                        </View>

                         <View style={{ paddingTop: 5 }}/>
                            <Text style={{ fontFamily: 'regular', color: color.white, marginTop: 10 }}>Region</Text>
                            <DropDownPicker
                                items={[
                                    { label: 'Nabatieh', value: 'nabatieh' },
                                    { label: 'North', value: 'north' },
                                    { label: 'Akkar', value: 'akkar' },
                                    { label: 'Baalbeck', value: 'baalbeck' },
                                    { label: 'Beirut', value: 'beirut' },
                                    { label: 'Beqaa', value: 'beqaa' }

                                ]}
                                arrowColor={color.white}
                                defaultValue={this.state.region}
                                activeItemStyle={{
                                    backgroundColor: 'rgb(188,37,57)',
                                }}
                                style={{
                                    backgroundColor: 'transparent',
                                    height: 45, 
                                    borderWidth: 0, 
                                    borderBottomWidth: 2, 
                                    borderBottomColor: color.red, borderRadius: 0,
                                }}
                                selectedLabelStyle={{
                                    color: color.white,
                                    fontFamily: 'medium',
                                    fontSize: 20
                                }}
                                activeLabelStyle={{
                                    color: color.white,
                                    fontFamily: 'medium',
                                    fontSize: 20
                                }}
                                itemStyle={{
                                    justifyContent: 'center',
                                    borderBottomColor: 'rgb(188,37,57)',
                                }}
                                labelStyle={{
                                    color: 'rgb(188,37,57)',
                                    fontFamily: 'regular',
                                    fontSize: 19,
                                }}
                                dropDownStyle={{ backgroundColor: color.white }} //rgb(188,37,57)
                                onChangeItem={item => this.setState({
                                    region: item.value
                                })}
                            />
                       <View style={{ paddingBottom: 5 }}/>

                        <View style={styles.inputContainer}>
                            <FloatingLabelInput
                                label={'Password'}
                                value={password}
                                isPassword
                                onChangeText={(value) => this.setState({ password: value })}
                                inputStyles={common.input}
                                customLabelStyles={[common.customLabe]}
                                labelStyles={common.label}
                            />
                        </View>


                        <View style={styles.buttonContainer}>
                            <Button
                                title="SIGN UP"
                                titleStyle={common.buttonTitle}
                                buttonStyle={common.button}
                                onPress={() => navigation.navigate('OTP')}
                            />
                        </View>

                        <View style={styles.loginWithContainer}>
                            <View style={styles.accountBox}>
                                <Text style={styles.account}>Already have an account? </Text>
                                <TouchableOpacity style={styles.signupBox} activeOpacity={0.9} onPress={() => this.props.navigation.navigate('Login')} >
                                    <Text style={[styles.signup]}>SIGN IN</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.nav}>
                                <View style={[styles.box]}>
                                    <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('Terms')}>
                                        <Text style={[styles.link]}>Terms & Conditions</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.box}>
                                    <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('Policy')}>
                                        <Text style={[styles.link]}>Privacy Policy</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </LinearGradient>


            </View>
        )
    }
}
