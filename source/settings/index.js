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
    Switch,
    TouchableHighlight
} from 'react-native';

var { width, height } = Dimensions.get('window');
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import color from '../common/color';
import common from '../common/global'
import Constants from 'expo-constants';

import Header from '../common/back';

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previousStatePush: false,
            previousStateEmail: false,
        }

    }

    render() {
        const { navigation } = this.props;
        const { previousStatePush, previousStateEmail } = this.state;
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={[color.gradiend_1, color.gradiend_1, color.gradiend_2]}
                    style={common.overlay}
                >
                    <Image source={require('../../assets/bottom-flag.png')} style={common.bottomImgae} />

                    <Header
                        title={'SETTINGS'}
                        icon={require('../../assets/settings.png')}
                        onMenu={() => navigation.goBack()}
                    />

                    <View style={styles.navigation}>
                        <View style={[styles.leftNavigation]}>
                            <Text style={styles.title} >Push Notifications</Text>
                        </View>
                        <View style={styles.rightNavigation}>
                            {Platform.OS == 'ios' &&
                                <Switch
                                    trackColor={{ false: color.white, true: color.white }}
                                    thumbColor={color.gradiend_1}
                                    ios_backgroundColor={color.white}
                                    onValueChange={() => this.setState({ previousStatePush: !previousStatePush })}
                                    value={previousStatePush}
                                    style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }}
                                />
                            }

                            {Platform.OS == 'android' &&
                                <LinearGradient
                                    end={{ x: 1, y: 0 }}
                                    style={styles.androidContainer}
                                    colors={['#ffffff', '#ffffff']}>
                                    <Switch
                                        style={[
                                            styles.switch,
                                            {
                                                marginTop: -0.1,
                                                marginLeft: -3,
                                                borderWidth: previousStatePush === true ? 0 : 0.3,
                                                opacity: previousStatePush === true ? 1 : 0,
                                            },
                                        ]}
                                        thumbColor={color.gradiend_1}
                                        trackColor={{
                                            false: '#ffffff',
                                            true: '#ffffff'
                                        }}
                                        onValueChange={() => this.setState({ previousStatePush: !previousStatePush })}
                                        value={previousStatePush}
                                    />
                                    {!previousStatePush && (
                                        <View style={styles.android1} />
                                    )}
                                </LinearGradient>
                            }
                        </View>
                    </View>

                    <View style={styles.navigation}>
                        <View style={[styles.leftNavigation]}>
                            <Text style={styles.title} >Email Updates</Text>
                        </View>
                        <View style={styles.rightNavigation}>
                            {Platform.OS == 'ios' &&
                                <Switch
                                    trackColor={{ false: color.white, true: color.white }}
                                    thumbColor={color.gradiend_1}
                                    ios_backgroundColor={color.white}
                                    onValueChange={() => this.setState({ previousStateEmail: !previousStateEmail })}
                                    value={previousStateEmail}
                                    style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }}
                                />
                            }

                            {Platform.OS == 'android' &&
                                <LinearGradient
                                    end={{ x: 1, y: 0 }}
                                    style={styles.androidContainer}
                                    colors={['#ffffff', '#ffffff']}>
                                    <Switch
                                        style={[
                                            styles.switch,
                                            {
                                                marginTop: -0.1,
                                                marginLeft: -3,
                                                borderWidth: previousStateEmail === true ? 0 : 0.3,
                                                opacity: previousStateEmail === true ? 1 : 0,
                                            },
                                        ]}
                                        thumbColor={color.gradiend_1}
                                        trackColor={{
                                            false: '#ffffff',
                                            true: '#ffffff'
                                        }}
                                        onValueChange={() => this.setState({ previousStateEmail: !previousStatePush })}
                                        value={previousStateEmail}
                                    />
                                    {!previousStateEmail && (
                                        <View style={styles.android1} />
                                    )}
                                </LinearGradient>
                            }

                        </View>
                    </View>

                </LinearGradient>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white
    },

    topContainer: {
        marginTop: Constants.statusBarHeight + 5,
        paddingBottom: 5,
        width: 50
    },


    bottom_view: {
        resizeMode: 'contain',
        position: 'absolute',
        width: width,
        height: '100%',
        bottom: -95,
        left: -15,
    },

    navigation: {
        flexDirection: 'row',
        marginHorizontal: width * 0.05,
        paddingTop: width * 0.03
    },

    leftNavigation: {
        flex: 1,
        alignItems: 'flex-start'
    },

    rightNavigation: {
        flex: 0.5,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    title: {
        fontSize: 18,
        letterSpacing: 0.5,
        fontFamily: 'black',
        color: color.white,
        textTransform: 'uppercase',
        paddingTop: 5
    },

    androidContainer: {
        height: 30,
        maxHeight: 60,
        width: 50,
        borderRadius: 15,
        paddingHorizontal: 0,
        borderWidth: 1.5,
        borderColor: color.gradiend_1
    },

    android1: {
        position: 'absolute',
        width: 23,
        height: 23,
        borderRadius: 23,
        borderWidth: 2,
        borderColor: color.gradiend_1,
        backgroundColor: color.gradiend_1,
        margin: 1.9,
    }

})

