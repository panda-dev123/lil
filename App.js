import React from 'react';
import { Button, View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
var { width, height } = Dimensions.get('window');
console.disableYellowBox = true;

import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


import CustomSidebarMenu from './source/drawer/index';

import Splash from './source/login/splash';
import Login from './source/login/index';
import Reset from './source/reset/index';
import Register from './source/register/index';
import OTP from './source/otp/index';

import Terms from './source/policy/terms';
import Policy from './source/policy/policy';
import color from './source/common/color';

import Live from './source/live/index';
import Video from './source/video/index';
import News from './source/news/index';
import Calendar from './source/calendar/index';
import Settings from './source/settings/index';
import Profile from './source/settings/profile';
import Details from './source/details/index';
import VideoPlayer from './source/video/video';
import LivePlay from './source/live/live';

const styles = StyleSheet.create({
    bottom_bar: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10, 
        paddingBottom: width * 0.02,
    },

    icon_box: {
        height: 30,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 3
    },

    icon: {
        resizeMode: 'contain',
        width: width * 0.08,
        height: width * 0.08
    },

    title: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'bold',
        paddingTop: Platform.OS == 'ios' ? 3 : 0,
    },
})

const VideoStack = createStackNavigator({
    Video: {
        screen: Video,
        navigationOptions: {
            // gesturesEnabled: false,
            header: null,
        }
    },
   


},

    {

        initialRouteName: 'Video',
        mode: 'slide',
        navigationOptions: {
            gesturesEnabled: false
        }
    });


const MainStack = createBottomTabNavigator({
    Live: {
        screen: Live,
    },
    Videos: {
        screen: Video,
    },
    News: {
        screen: News,
    },
    Calendar: {
        screen: Calendar,
    },
},
    {

        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) =>
                getTabBarIcon(navigation, focused, tintColor),
        }),


        tabBarOptions: {
            showLabel: false,
            activeTintColor: color.gradiend_1,
            inactiveTintColor: color.dark_blue,
            style: {
                height: 70,
                position: 'absolute',
                alignItems: 'center',
                backgroundColor: color.white,
                borderColor: color.white,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            },
        },

        initialRouteName: 'Live',
    });



const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let iconName, size;
    if (routeName === 'Live') {
        iconName = focused ? require('./assets/live-color.png') : require('./assets/live-gray.png');
    } else if (routeName === 'Videos') {
        iconName = focused ? require('./assets/video-color.png') : require('./assets/video-gray.png');
    } else if (routeName === 'News') {
        iconName = focused ? require('./assets/news-color.png') : require('./assets/news-gray.png');
    } else if (routeName === 'Calendar') {
        iconName = focused ? require('./assets/calendar-color.png') : require('./assets/calendar-gray.png');
    }
    return (
        <View style={styles.bottom_bar} >
            <View style={styles.icon_box}>
                <Image source={iconName} style={styles.icon} />
            </View>
            <Text style={[styles.title, { color: focused ? color.gradiend_2 : color.grey_4 }]}>{routeName}</Text>
        </View>
    )
};


const Navigation = createStackNavigator({
    Menu: {
        screen: MainStack,
        navigationOptions: {
            header: null,
        }
    },
    Splash: {
        screen: Splash,
        navigationOptions: {
            header: null,
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    Reset: {
        screen: Reset,
        navigationOptions: {
            header: null,
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            header: null,
        }
    },
    OTP: {
        screen: OTP,
        navigationOptions: {
            header: null,
        }
    },
    Terms: {
        screen: Terms,
        navigationOptions: {
            header: null,
        }
    },
    Policy: {
        screen: Policy,
        navigationOptions: {
            header: null,
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            header: null,
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            header: null,
        }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            header: null,
        }
    },
    VideoPlayer: {
        screen: VideoPlayer,
        navigationOptions: {
            header: null,
        }
    },
    LivePlay: {
        screen: LivePlay,
        navigationOptions: {
            header: null,
        }
    }
},

    {

        initialRouteName: 'Splash',
        mode: 'slide',
        navigationOptions: {
            gesturesEnabled: false
        }
    });


const DrawerNavigator = createDrawerNavigator({
    Menu: { screen: Navigation },
}, {
    drawerType: 'back',
    drawerPosition: 'Left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerWidth: width,
    drawerToggleRoute: 'DrawerToggle',
    cardStyle: { shadowColor: 'transparent' },
    contentComponent: (props) => (
        <CustomSidebarMenu {...props} />
    ),
}
);


const AppNavigator = createSwitchNavigator({
    Home: DrawerNavigator,
});




const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    state = {
        loaded: false
    };

    async _cacheResourcesAsync() {
        const images = [require('./assets/icon.png')];
        const cacheImages = ""
        return Promise.all(cacheImages);
    }

    _loadFontsAsync = async () => {
        let isLoaded = await Font.loadAsync({
            avenir: require('./assets/fonts/AvenirLTStd-Book.otf'),
            regular: require('./assets/fonts/Tajawal-Regular.ttf'),
            light: require('./assets/fonts/Tajawal-Light.ttf'),
            medium: require('./assets/fonts/Tajawal-Medium.ttf'),
            extralight: require('./assets/fonts/Tajawal-ExtraLight.ttf'),
            
            bold: require('./assets/fonts/Tajawal-Bold.ttf'),
            extrabold: require('./assets/fonts/Tajawal-ExtraBold.ttf'),
            black: require('./assets/fonts/Tajawal-Black.ttf')
        });
        this.setState({ loaded: isLoaded });
    };

    componentDidMount() {
        this._loadFontsAsync()
    }


    render() {
        if (!this.state.loaded) {
            return (
                <AppLoading
                    startAsync={this._cacheResourcesAsync}
                    onFinish={() => this.setState({ loaded: true })}
                    onError={console.warn}
                />
            );
        }
        return <AppContainer />;

    }
}