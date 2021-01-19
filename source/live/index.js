import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import {
    TouchableHighlight,
    Text,
    View,
    ImageBackground,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    SectionList,
    FlatList,
    Platform
} from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import common from '../common/global';
import color from '../common/color';
var { width, height } = Dimensions.get('window');
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-elements';
import styles from './styles'
import Header from '../common/header';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Icon, SearchBar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { AntDesign } from '@expo/vector-icons';

import Constants from 'expo-constants';
import {
    NavigationEvents,
} from 'react-navigation';

class Stream extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [
                { name: 'Ring', profile: require('../../assets/ring-1.png'), isSelect: true },
                { name: 'Jouniek', profile: require('../../assets/ring.png'), isSelect: false },
                { name: 'Saida', profile: require('../../assets/ring-1.png'), isSelect: false },
                { name: 'Ring', profile: require('../../assets/ring.png'), isSelect: false },
            ]
        };
    }

    renderItem({ item, index }) {
        const lengthArray = this.state.user.length;
        return (
            <View style={styles.topContainer}>
                <View style={styles.inner}>
                    <Image source={item.profile} style={[styles.profile, { borderWidth: item.isSelect ? 2 : 0 }]} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={[styles.name, {
                        fontFamily: item.isSelect ? 'bold' : 'regular',
                    }]}>{item.name}</Text>
                </View>
            </View>
        );
    }


    render() {
        return (
            <View style={{}}>


                <FlatList
                    refreshing={true}
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.user}
                    extraData={this.state}
                    renderItem={this.renderItem.bind(this)}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    style={{ height: width / 4 + 35, paddingHorizontal: width * 0.05 }}
                />

                <ImageBackground source={require('../../assets/news.png')} style={styles.liveBanner} 
                    imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    <View style={styles.liveTop}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('LivePlay')}>
                            <Image source={require('../../assets/Max.png')} style={styles.sound} />
                        </TouchableOpacity>

                        <View style={[styles.fav, { marginHorizontal: 10 }]}>
                            <TouchableOpacity activeOpacity={0.9}>
                                <FontAwesome name="heart-o" size={20} color={color.gradiend_2} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.view}>
                            <AntDesign name="eye" size={20} color={color.gradiend_1} />
                            <Text style={styles.count}>30</Text>
                        </View>
                    </View>


                    <View style={[{
                        width: width,
                        position: 'absolute',
                        bottom: Constants.statusBarHeight,
                        alignItems: 'center'
                    }]}>
                        <Button
                            title="GO LIVE"
                            titleStyle={[common.buttonTitle, {
                                color: color.white,
                            }]}
                            buttonStyle={[common.button, {
                                width: width * 0.7
                            }]}
                            onPress={() => this.props.navigation.navigate('LivePlay')}
                            ViewComponent={LinearGradient}
                            linearGradientProps={{
                                colors: [color.gradiend_1, color.gradiend_2],
                            }}
                        />
                    </View>
                </ImageBackground>






            </View>
        );
    }
}


class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [
                { name: 'Ring', profile: require('../../assets/ring-1.png'), isSelect: true },
                { name: 'Jouniek', profile: require('../../assets/ring.png'), isSelect: false },
                { name: 'Saida', profile: require('../../assets/ring-1.png'), isSelect: false },
                { name: 'Ring', profile: require('../../assets/ring.png'), isSelect: false },
            ]
        };
    }

    renderItem({ item, index }) {
        const lengthArray = this.state.user.length;
        return (
            <View style={styles.topContainer}>
                <View style={styles.inner}>
                    <Image source={item.profile} style={[styles.profile, { borderWidth: item.isSelect ? 2 : 0 }]} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={[styles.name, {
                        fontFamily: item.isSelect ? 'bold' : 'regular',
                    }]}>{item.name}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={[{ paddingHorizontal: width * 0.05 }]}>

                <ScrollView style={{ marginBottom: 70 }} showsVerticalScrollIndicator={false}>

                    <FlatList
                        refreshing={true}
                        horizontal={true}
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.user}
                        extraData={this.state}
                        renderItem={this.renderItem.bind(this)}
                        scrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                        style={{ height: width / 4 + 35 }}
                    />

                    <ImageBackground source={require('../../assets/news.png')} style={styles.radioBanner} imageStyle={{ borderRadius: 20 }}>
                        <View style={[common.boxOverlay, {
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20
                        }]}>
                            <Text style={common.boxOverlayTitle}>Peaceful protest inbeirut turns into violence</Text>
                        </View>
                    </ImageBackground>

                    <View style={styles.sliderContainer}>
                        <Image source={require('../../assets/lyrics.png')} style={styles.slider} />

                        <Slider
                            style={styles.bar}
                            minimumValue={0}
                            value={20}
                            maximumValue={100}
                            minimumTrackTintColor="#FFFFFF"
                            maximumTrackTintColor="#ffffff"

                        />

                        <View style={styles.playerContainer}>
                            <View style={styles.playerSide}>
                                <TouchableOpacity activeOpacity={0.9}>
                                    <Image source={require('../../assets/Speaker.png')} style={styles.sound} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.center}>
                                <TouchableOpacity activeOpacity={0.9}>
                                    <Image source={require('../../assets/fast-backward.png')} style={styles.seek} />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.9}>
                                    <Image source={require('../../assets/Play.png')} style={styles.play} />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.9}>
                                    <Image source={require('../../assets/fast-forward.png')} style={styles.seek} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.playerSide}>
                                <View style={styles.fav}>
                                    <TouchableOpacity activeOpacity={0.9}>
                                        <FontAwesome name="heart-o" size={20} color={color.gradiend_1} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>


            </View>
        )
    }
}



export default class Live extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: 'Live Stream' },
                { key: 'second', title: 'Live Radio' },
            ],


        }
    }


    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>

                <LinearGradient
                    colors={[color.gradiend_1, color.gradiend_1, color.gradiend_2]}
                    style={{ flex: 1, }}
                >

                    <Header
                        title={this.state.index == 0 ? 'LIVE STREAM' : 'LIVE RADIO'}
                        onMenu={() => this.props.navigation.toggleDrawer()}
                    />


                    <TabView
                        navigationState={this.state}
                        renderScene={SceneMap({
                            first: () => <Stream navigation={this.props.navigation} />,
                            second: () => <Radio navigation={this.props.navigation} />
                        })}
                        onIndexChange={index => this.setState({ index })}
                        initialLayout={{ width: Dimensions.get('window').width }}
                        renderTabBar={(props) =>
                            <TabBar
                                {...props}
                                activeColor={'red'}
                                renderLabel={({ route, focused }) => (
                                    <View style={{}}>
                                        <Text style={[common.tabTitle, {
                                            fontFamily: focused ? 'black' : 'regular',
                                            marginTop: Platform.OS == 'android' ? focused ? -5 : 0 : 2
                                        }]}>
                                            {route.title}
                                        </Text>

                                    </View>
                                )}
                                style={common.tabContainer}
                                renderIcon={this.renderIcon}
                                indicatorStyle={common.tabIndicator}
                                pressColor={color.grey_600}
                            />
                        }
                    />
                </LinearGradient>
            </View>
        )
    }
}
