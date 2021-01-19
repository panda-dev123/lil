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
    Platform,
    Keyboard
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



export default class Live extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'transparent'} style="light"/>
                <ImageBackground source={require('../../assets/news.png')} style={styles.livePlay}>
                    <View style={[styles.liveTop, {
                        alignItems: 'center',
                        marginTop: Platform.OS == 'android' ? Constants.statusBarHeight + 10 :  Constants.statusBarHeight
                    }]}>

                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <View style={[styles.inner, { justifyContent: 'flex-start', }]}>
                                <Image source={require('../../assets/ring-1.png')} style={[styles.profile, { borderWidth: 2 }]} />
                            </View>
                        </View>

                        <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('Live')}>
                            <Image source={require('../../assets/Mini.png')} style={styles.sound} />
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
                        bottom: this.state.keyboardSpace ? this.state.keyboardSpace : 10,
                        alignItems: 'center'
                    }]}>
                        <View style={styles.commentBox}>
                            <View style={{ flex: 0.2, justifyContent: 'flex-start' }}>
                                <Image source={require('../../assets/user.jpg')}
                                    style={styles.userSelf} />
                            </View>
                            <View style={styles.commentTextBox}>
                                <TextInput
                                    style={styles.commentInput}
                                    placeholder={'Comment'}
                                    placeholderTextColor={color.black}
                                />
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
