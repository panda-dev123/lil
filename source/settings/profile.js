import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    ScrollView,
    FlatList,
    Dimensions,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Keyboard
} from 'react-native';
import AnimatedHideView from 'react-native-animated-hide-view';
var { width, height } = Dimensions.get('window');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from '../common/color';
import common from '../common/global'
import Constants from 'expo-constants';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Modal from 'react-native-modal';

import styles from './styles';

import Header from '../common/back';
import { Button } from 'react-native-elements';
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'example@gmail.com',
            password: '123456',
            phone: '70/123456',
            newPassword: '',
            confirm: '',
            isProfile: false,
            isPasswordForm: false,
            keyboardSpace: ''
        }

        Keyboard.addListener('keyboardDidShow', frames => {
            if (!frames.endCoordinates) return;
            this.setState({ keyboardSpace: frames.endCoordinates.height });
        });

        Keyboard.addListener('keyboardDidHide', frames => {
            this.setState({ keyboardSpace: '' });
        });
    }

    render() {
        const { navigation } = this.props;
        const { email, password, phone, isProfile, isPasswordForm, newPassword, confirm } = this.state;

        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={[color.gradiend_1, color.gradiend_1, color.gradiend_2]}
                    style={common.overlay}
                >
                    <Image source={require('../../assets/bottom-flag.png')} style={common.bottomImgae} />

                    <Header
                        title={'my profile'}
                        icon={require('../../assets/profile.png')}
                        onMenu={() => navigation.goBack()}
                    />

                    <KeyboardAwareScrollView scrollEnabled={this.state.keyboardSpace ? true : false} showsVerticalScrollIndicator={false}>
                        <View style={styles.top}>
                            <View style={styles.profile}>
                                <Image source={require('../../assets/user.jpg')} style={styles.profileImage} />
                                <TouchableOpacity activeOpacity={0.9} style={styles.upload}>
                                    <FontAwesome5 name="plus" size={23} color={color.gradiend_1} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.nameContainer}>
                                <Text style={styles.name}>Name</Text>
                                <TouchableOpacity activeOpacity={0.7} onPress={() => this.setState({ isProfile: true })}>
                                    <MaterialCommunityIcons name="pencil-outline" size={22} color={color.white} style={styles.editName} />
                                </TouchableOpacity>
                            </View>
                        </View>


                        {(!isProfile && !isPasswordForm) &&
                            <View style={{ paddingHorizontal: width * 0.05 }}>

                                <View style={styles.inputContainer}>
                                    <FloatingLabelInput
                                        label={'Email'}
                                        value={email}
                                        keyboardType={'email-address'}
                                        onChangeText={(value) => this.setState({ email: value })}
                                        inputStyles={common.input}
                                        customLabelStyles={[common.customLabe]}
                                        labelStyles={common.label}
                                        containerStyles={common.inputContainer}
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
                                        containerStyles={common.inputContainer}
                                    />
                                </View>

                                <View style={styles.inputContainer}>
                                    <FloatingLabelInput
                                        label={'Password'}
                                        value={password}
                                        isPassword
                                        onChangeText={(value) => this.setState({ password: value })}
                                        inputStyles={common.input}
                                        customLabelStyles={[common.customLabe]}
                                        labelStyles={common.label}
                                        containerStyles={common.inputContainer}
                                    />
                                </View>

                                <TouchableOpacity activeOpacity={0.9} style={{ alignItems: 'flex-end' }}
                                    onPress={() => this.setState({ isPasswordForm: true })}>
                                    <Text style={styles.passwordText}>Change password</Text>
                                </TouchableOpacity>

                            </View>
                        }

                        {isProfile &&
                            <AnimatedHideView visible={isProfile}>
                                <View style={styles.profileContainer}>
                                    <TouchableOpacity activeOpacity={0.7} onPress={() => this.setState({ isProfile: false })} style={styles.closeProfile}>
                                        <MaterialCommunityIcons name="close" size={24} color={color.gradiend_1} />
                                    </TouchableOpacity>

                                    <Text style={styles.title}>EDIT Profile</Text>
                                    <View style={styles.inputContainer}>
                                        <FloatingLabelInput
                                            label={'Email'}
                                            value={email}
                                            keyboardType={'email-address'}
                                            onChangeText={(value) => this.setState({ email: value })}
                                            inputStyles={common.inputEdit}
                                            customLabelStyles={{
                                                color: color.gradiend_1
                                            }}
                                            labelStyles={{
                                                color: color.gradiend_1,
                                                fontFamily: 'regular',
                                                left: 0
                                            }}
                                            containerStyles={common.editInputContainer}
                                        />
                                    </View>

                                    <View style={styles.inputContainer}>
                                        <FloatingLabelInput
                                            label={'Phone Number'}
                                            keyboardType={'phone-pad'}
                                            mask="99/999999"
                                            value={phone}
                                            onChangeText={(value) => this.setState({ phone: value })}
                                            inputStyles={common.inputEdit}
                                            customLabelStyles={{
                                                color: color.gradiend_1
                                            }}
                                            labelStyles={{
                                                color: color.gradiend_1,
                                                fontFamily: 'regular',
                                                left: 0
                                            }}
                                            containerStyles={common.editInputContainer}
                                        />
                                    </View>

                                    <View style={styles.inputContainer}>
                                        <FloatingLabelInput
                                            label={'Password'}
                                            value={password}
                                            isPassword
                                            onChangeText={(value) => this.setState({ password: value })}
                                            inputStyles={common.inputEdit}
                                            customLabelStyles={{
                                                color: color.gradiend_1
                                            }}
                                            labelStyles={{
                                                color: color.gradiend_1,
                                                fontFamily: 'regular',
                                                left: 0
                                            }}
                                            containerStyles={common.editInputContainer}
                                        />
                                    </View>


                                    <View style={styles.buttonContainer}>
                                        <Button
                                            title="SAVE CHANGES"
                                            titleStyle={[common.buttonTitle, {
                                                color: color.white
                                            }]}
                                            buttonStyle={common.button}
                                            onPress={() => this.props.navigation.navigate('Menu')}
                                            ViewComponent={LinearGradient}
                                            linearGradientProps={{
                                                colors: [color.gradiend_1, color.gradiend_2],
                                            }}
                                        />
                                    </View>

                                </View>
                            </AnimatedHideView>
                        }

                        {isPasswordForm &&
                            <AnimatedHideView visible={isPasswordForm}>
                                <View style={styles.profileContainer}>
                                    <TouchableOpacity activeOpacity={0.7} onPress={() => this.setState({ isPasswordForm: false })} style={styles.closeProfile}>
                                        <MaterialCommunityIcons name="close" size={24} color={color.gradiend_1} />
                                    </TouchableOpacity>

                                    <Text style={styles.title}>Change Password</Text>

                                    <View style={styles.inputContainer}>
                                        <FloatingLabelInput
                                            label={'New Password'}
                                            value={newPassword}
                                            isPassword
                                            onChangeText={(value) => this.setState({ newPassword: value })}
                                            inputStyles={common.inputEdit}
                                            customLabelStyles={{
                                                color: color.gradiend_1
                                            }}
                                            labelStyles={{
                                                color: color.gradiend_1,
                                                fontFamily: 'regular',
                                                left: 0
                                            }}
                                            containerStyles={common.editInputContainer}
                                        />
                                    </View>

                                    <View style={styles.inputContainer}>
                                        <FloatingLabelInput
                                            label={'Confirm Password'}
                                            value={confirm}
                                            isPassword
                                            onChangeText={(value) => this.setState({ confirm: value })}
                                            inputStyles={common.inputEdit}
                                            customLabelStyles={{
                                                color: color.gradiend_1
                                            }}
                                            labelStyles={{
                                                color: color.gradiend_1,
                                                fontFamily: 'regular',
                                                left: 0
                                            }}
                                            containerStyles={common.editInputContainer}
                                        />
                                    </View>


                                    <View style={styles.buttonContainer}>
                                        <Button
                                            title="CHANGE PASSWORD"
                                            titleStyle={[common.buttonTitle, {
                                                color: color.white
                                            }]}
                                            buttonStyle={common.button}
                                            onPress={() => this.props.navigation.navigate('Menu')}
                                            ViewComponent={LinearGradient}
                                            linearGradientProps={{
                                                colors: [color.gradiend_1, color.gradiend_2],
                                            }}
                                        />
                                    </View>

                                </View>
                            </AnimatedHideView>
                        }
                    </KeyboardAwareScrollView>




                </LinearGradient>
            </View>
        );
    }
}




