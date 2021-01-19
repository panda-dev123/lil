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
    TouchableHighlight,
    Platform
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

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previousState: false,
            menus: [
                {
                    "name": "language",
                    "route": "language",
                    "icon": require('../../assets/EN.png')
                },
                {
                    "name": "My profile",
                    "route": "Profile",
                    "icon": require('../../assets/profile.png')
                },
                {
                    "name": "settings",
                    "route": "Settings",
                    "icon": require('../../assets/settings.png')
                },
                {
                    "name": "privacy policy",
                    "route": "Policy",
                    "icon": require('../../assets/policy.png')
                },
                {
                    "name": "terms & conditions",
                    "route": "Terms",
                    "icon": require('../../assets/terms.png')
                },
                {
                    "name": "logout",
                    "route": "Login",
                    "icon": require('../../assets/logout.png')
                }
            ]
        }

    }

    renderItem({ item, index }) {
        console.log(item);
        const lengthArray = this.state.menus.length;
        const { previousState } = this.state;
        return (
            <View style={styles.menu}>
                <TouchableOpacity activeOpacity={0.7} style={[styles.menuView, {
                    paddingVertical: index == 0 ? width * 0.016 : Platform.OS == 'ios' ? width * 0.03 : 10,
                }]}
                    onPress={() => this.props.navigation.navigate(item.route)}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={item.icon} style={styles.menuIcon} />
                        <Text style={styles.menuItem} >{item.name}</Text>
                    </View>
                    {index == 0 &&
                        <View style={{ alignItems: 'flex-end', marginTop: -3, justifyContent: 'center' }}>
                            {Platform.OS == 'ios' &&
                                <Switch
                                    trackColor={{ false: color.white, true: color.white }}
                                    thumbColor={color.gradiend_1}
                                    ios_backgroundColor={color.white}
                                    onValueChange={() => this.setState({ previousState: !previousState })}
                                    value={previousState}
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
                                                borderWidth: previousState === true ? 0 : 0.3,
                                                opacity: previousState === true ? 1 : 0,
                                            },
                                        ]}
                                        thumbColor={color.gradiend_1}
                                        trackColor={{
                                            false: '#ffffff',
                                            true: '#ffffff'
                                        }}
                                        onValueChange={() => this.setState({ previousState: !previousState })}
                                        value={previousState}
                                    />
                                    {!previousState && (
                                        <View style={styles.android1} />
                                    )}
                                </LinearGradient>
                            }

                        </View>
                    }
                </TouchableOpacity>
            </View>
        );
    }


    render() {
        let index = 0;
        const { navigation } = this.props;
        const { previousState } = this.state;
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={[color.gradiend_1, color.gradiend_1, color.gradiend_2]}
                    style={common.overlay}
                >
                    <Image source={require('../../assets/bottom-flag.png')} style={common.bottomImgae} />

                    <Header
                        title={''}
                        onMenu={() => navigation.toggleDrawer()}
                        style={{ marginTop: Constants.statusBarHeight }}
                    />

                    <FlatList
                        refreshing={true}
                        scrollEnabled={false}
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.menus}
                        extraData={this.state}
                        numColumns={1}
                        renderItem={this.renderItem.bind(this)}
                    />



                    <View style={styles.loginWithContainer}>
                        <Text style={styles.loginWith}>Follow Us Here</Text>
                        <View style={styles.nav}>
                            <View style={styles.box}>
                                <TouchableOpacity activeOpacity={0.7} style={styles.innerBox}>
                                    <FontAwesome5 name="facebook-f" size={25} color={color.gradiend_1} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.box}>
                                <TouchableOpacity activeOpacity={0.7} style={styles.innerBox}>
                                    <AntDesign name="instagram" size={27} color={color.gradiend_1} style={{ paddingTop: 2, paddingLeft: 1 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.box}>
                                <TouchableOpacity activeOpacity={0.7} style={styles.innerBox}>
                                    <AntDesign name="twitter" size={25} color={color.gradiend_1} style={{ paddingTop: 5 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.box}>
                                <TouchableOpacity activeOpacity={0.7} style={styles.innerBox}>
                                    <AntDesign name="youtube" size={26} color={color.gradiend_1} style={{ paddingTop: 2 }} />
                                </TouchableOpacity>
                            </View>
                        </View>


                    </View>

                </LinearGradient>
            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    bottom_view: {
        resizeMode: 'contain',
        position: 'absolute',
        width: width,
        height: '100%',
        bottom: -95,
        left: -15,
    },

    menu: {
        marginHorizontal: width * 0.05,
    },

    menuView: {
        flexDirection: 'row',
    },

    menuItem: {
        fontSize: 20,
        letterSpacing: 0.5,
        fontFamily: 'black',
        color: color.white,
        textTransform: 'uppercase',
        paddingTop: Platform.OS == 'ios' ? 5 : 0
    },

    menuIcon: {
        width: 19,
        height: 19,
        resizeMode: 'contain',
        marginRight: width * 0.03
    },

    nav: {
        flexDirection: 'row',
        paddingHorizontal: 75
    },

    box: {
        flex: 1,
    },

    innerBox: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.white,
        borderRadius: 50,
        width: 45,
        height: 45
    },

    loginWithContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: Platform.OS == 'ios' ? 50 : Constants.statusBarHeight,
    },

    loginWith: {
        paddingVertical: 20,
        color: color.white,
        fontSize: 19,
        fontFamily: 'regular'
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

