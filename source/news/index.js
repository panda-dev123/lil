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
    Platform
} from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import common from '../common/global';
import color from '../common/color';
var { width, height } = Dimensions.get('window');
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles'
import Header from '../common/header';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Icon, SearchBar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';


import moment from 'moment';
import RBSheet from "react-native-raw-bottom-sheet";

import Constants from 'expo-constants';

import {
    NavigationEvents,
} from 'react-navigation';

class Allnews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showallposts: [],
            isShowall: false,
            categories: [
                { id: 1, title: 'People' },
                { id: 2, title: 'Health' },
                { id: 3, title: 'Politics' }
            ],
            news: [
                {
                    id: 1,
                    title: 'Peaceful protest inbeirut turns into violence',
                    description: '',
                    time: '2020-11-17 17:30:00',
                    image: require('../../assets/news.png'),
                    category: 1
                },
                {
                    id: 2,
                    title: 'Peaceful protest inbeirut turns into violence',
                    description: '',
                    time: '2020-11-17 05:30',
                    image: require('../../assets/news.png'),
                    category: 1
                },
                {
                    id: 1,
                    title: 'Peaceful protest inbeirut turns into violence',
                    description: '',
                    time: '2020-11-17 17:30:00',
                    image: require('../../assets/health.png'),
                    category: 2
                },
                {
                    id: 2,
                    title: 'Peaceful protest inbeirut turns into violence',
                    description: '',
                    time: '2020-11-17 05:30',
                    image: require('../../assets/health.png'),
                    category: 2
                },
                {
                    id: 2,
                    title: 'Peaceful protest inbeirut turns into violence',
                    description: '',
                    time: '2020-11-17 05:30',
                    image: require('../../assets/health.png'),
                    category: 3
                },
            ],
            datepicker: [],
            rbsheet: false,

            selectDate: moment().format('D')
        };
    }

    Last7Days = () => {
        var result = [];
        var d = new Date();
        d.setDate(d.getDate() + 1);
        result.push(moment(d).format('MMM DD'))


        for (var i = 0; i < 5; i++) {
            var d = new Date();
            d.setDate(d.getDate() - i);
            result.push(moment(d).format('MMM DD'))
        }

        this.setState({ datepicker: result })
    }

    componentDidMount() {
        this.Last7Days();
    }

    showall = (item) => {
        const { news } = this.state;
        var post = news.filter(row => row.category === item.id);
        this.setState({ showallposts: post, isShowall: true, selectedTitle: item.title })
    }


    openRbSheet = () => {
        this.setState({ rbsheet: true }, () => {
            this.RBSheet.open();
        })
    }

    closeRbSheet = (item) => {
        this.setState({ rbsheet: false, selectDate: moment(item).format('D') }, () => {
            this.RBSheet.close();
        })
    }

    render() {
        const { categories, news, isShowall, showallposts, rbsheet, selectDate } = this.state;
        return (
            <View style={[{ flex: 1, }]}>

                <View style={common.searchInputContainer}>
                    <Icon style={{ padding: 10, }} name="search" size={22} color={color.gradiend_1} />
                    <TextInput
                        ref={input => { this.textInput = input }}
                        style={common.searchInput}
                        clearButtonMode="always"
                        placeholder="Search"
                        placeholderTextColor={color.gradiend_1}
                        onChangeText={(searchText) => this.setState({ searchText })}
                        value={this.state.searchText}
                    />
                </View>

                {isShowall &&
                    <ScrollView
                        contentContainerStyle={{ alignItems: 'center', justifyContent:'center' }}
                        showsVerticalScrollIndicator={false}
                    >

                        <View style={[common.boxHeader]}>
                            <View style={[common.boxHeaderLeft, { flexDirection: 'row' }]}>
                                <TouchableOpacity style={{ width: 30 }} onPress={() => this.setState({ isShowall: false })}>
                                    <Entypo name={"chevron-left"} size={22} color={color.white} style={{ marginRight: 3, marginTop: -5 }} />
                                </TouchableOpacity>
                                <Text style={[common.boxTitle, {
                                    marginTop: Platform.OS == 'android' ? -10 : 0
                                }]}>{this.state.selectedTitle}</Text>
                            </View>

                            <View style={[common.boxHeaderRight]}>
                                <TouchableOpacity onPress={() => this.openRbSheet()} style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: -3 }}>
                                    <Text style={[common.showAll]}>{'Sort By Date'}</Text>
                                    <View>
                                        <Entypo name={rbsheet ? "chevron-up" : "chevron-down"} size={22} color={color.white} style={{ marginLeft: 3, marginTop: -3 }} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {showallposts && showallposts.map((slide, index) => {

                            return (
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => this.props.navigation.navigate('Details')}
                                    style={{
                                        flex: 1, borderRadius: 10,
                                        marginBottom: showallposts.length - 1 == index ? 100 : 20,
                                    }}
                                >
                                    <ImageBackground
                                        source={slide.image}
                                        style={[common.boxImage, {
                                            width: width - 40
                                        }]}
                                        imageStyle={{ borderRadius: 10 }}>

                                        <View style={{ alignItems: 'flex-end' }}>
                                            <TouchableOpacity activeOpacity={0.8} onPress={() => alert()}>
                                                <FontAwesome name="bookmark-o" size={24} color={color.white} />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={[common.boxOverlay, {
                                            width: width - 40
                                        }]}>
                                            <Text style={common.boxOverlayTitle}>{slide.title} </Text>
                                            <Text style={common.boxOverlayTime} >{moment(slide.time).format('DD/MM/YYYY')} | {moment(slide.time).format('hh:mma')}</Text>
                                        </View>
                                    </ImageBackground>

                                </TouchableOpacity>
                            )

                        })
                        }
                    </ScrollView>
                }

                {!isShowall &&
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {categories && categories.map((item, i) => {
                            var count = news.filter(r => r.category === item.id);
                            return (
                                <View style={{
                                    marginBottom: categories.length - 1 == i ? 15 : 0
                                }}>

                                    <View style={{ paddingBottom: count.length > 0 ? 0 : 15 }}>

                                        <View style={common.boxHeader}>
                                            <View style={common.boxHeaderLeft}>
                                                <Text style={common.boxTitle}>{count.length > 0 ? item.title : ''}</Text>
                                            </View>

                                            <View style={common.boxHeaderRight}>
                                                <TouchableOpacity onPress={() => this.showall(item)}>
                                                    <Text style={common.showAll}>{count.length > 0 ? 'Show all' : ''}</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                        <ScrollView
                                            style={{ marginBottom: 20 }}
                                            ref={item.title}
                                            horizontal={true}
                                            decelerationRate={0}
                                            onResponderRelease={() => {
                                                var interval = width - 80 + 15;
                                                var snapTo = (this.scrollingRight1) ? Math.ceil(this.lastx / interval) :
                                                    Math.floor(this.lastx / interval);
                                                var scrollTo = snapTo * interval;
                                                this.refs[item.title].scrollTo(0, scrollTo);
                                            }}
                                            scrollEventThrottle={32}
                                            onScroll={(event) => {
                                                var nextx = event.nativeEvent.contentOffset.x;
                                                this.scrollingRight1 = (nextx > this.lastx);
                                                this.lastx = nextx;
                                            }}
                                            showsHorizontalScrollIndicator={false}>

                                            {news.map((slide, index) => {
                                                if (item.id == slide.category) {
                                                    var countRelated = news.filter((row: any) => row.category == item.id);
                                                    return (
                                                        <TouchableOpacity
                                                            activeOpacity={0.8}
                                                            onPress={() => this.props.navigation.navigate('Details')}
                                                            style={{
                                                                flex: 1, borderRadius: 10,
                                                                marginLeft: slide.id == countRelated[0].id ? 18 : 0,
                                                                marginRight: slide.id == countRelated[countRelated.length - 1].id ? 20 : 15,
                                                                marginBottom: (i == categories.length - 1) ? 70 : 0
                                                            }}
                                                        >
                                                            <ImageBackground
                                                                source={slide.image}
                                                                style={common.boxImage}
                                                                imageStyle={{ borderRadius: 10 }}>

                                                                <View style={{ alignItems: 'flex-end' }}>
                                                                    <TouchableOpacity activeOpacity={0.8} onPress={() => alert()}>
                                                                        <FontAwesome name="bookmark-o" size={24} color={color.white} />
                                                                    </TouchableOpacity>
                                                                </View>

                                                                <View style={common.boxOverlay}>
                                                                    <Text style={common.boxOverlayTitle}>{slide.title} </Text>
                                                                    <Text style={common.boxOverlayTime} >{moment(slide.time).format('DD/MM/YYYY')} | {moment(slide.time).format('hh:mma')}</Text>
                                                                </View>
                                                            </ImageBackground>

                                                        </TouchableOpacity>
                                                    )
                                                }
                                            })
                                            }
                                        </ScrollView>
                                    </View>

                                </View>
                            )
                        })}
                    </ScrollView>
                }

                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    closeOnPressMask={false}
                    openDuration={250}
                    customStyles={{
                        container: {
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20
                        }
                    }}
                >
                    {this.state.datepicker.slice(0).reverse().map((item) => {
                        return (
                            <View style={[styles.dateContainer, {
                                backgroundColor: moment(item).format('D') == selectDate ? color.gradiend_1 : color.white,
                            }]}>
                                <TouchableOpacity activeOpacity={0.6} onPress={() => this.closeRbSheet(item)} style={{ width: width }}>
                                    <Text style={[styles.dateText, {
                                        fontFamily: moment(item).format('D') == selectDate ? 'black' : 'medium',
                                        color: moment(item).format('D') == selectDate ? color.white : color.gradiend_1,
                                    }]}>{item}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </RBSheet>

            </View>
        );
    }
}


class Savednews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savednews: [
                {
                    id: 1,
                    title: 'Peaceful protest inbeirut turns into violence',
                    description: '',
                    time: '2020-11-17 17:30:00',
                    image: require('../../assets/news.png'),
                    category: 1
                },
                {
                    id: 2,
                    title: 'Peaceful protest inbeirut turns into violence',
                    description: '',
                    time: '2020-11-17 05:30',
                    image: require('../../assets/news.png'),
                    category: 1
                },
                {
                    id: 3,
                    title: 'Peaceful protest inbeirut turns into violence',
                    description: '',
                    time: '2020-11-17 17:30:00',
                    image: require('../../assets/news.png'),
                    category: 2
                },
            ],
        };
    }

    render() {
        const { savednews } = this.state;
        return (
            <View style={[{ flex: 1, }]}>

                <View style={common.searchInputContainer}>
                    <Icon style={{ padding: 10, }} name="search" size={22} color={color.gradiend_1} />
                    <TextInput
                        ref={input => { this.textInput = input }}
                        style={common.searchInput}
                        clearButtonMode="always"
                        placeholder="Search"
                        placeholderTextColor={color.gradiend_1}
                        onChangeText={(searchText) => this.setState({ searchText })}
                        value={this.state.searchText}
                    />
                </View>

                <View style={styles.second}>
                    <ScrollView
                        style={{ marginBottom: 30 }}
                        showsVerticalScrollIndicator={false}
                    >
                        {savednews && savednews.map((slide, index) => {

                            return (
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => this.props.navigation.navigate('Details')}
                                    style={{
                                        flex: 1, borderRadius: 10,
                                        marginBottom: savednews.length - 1 == index ? 150 : 20,
                                    }}
                                >
                                    <ImageBackground
                                        source={slide.image}
                                        style={[common.boxImage, {
                                            width: width - 40
                                        }]}
                                        imageStyle={{ borderRadius: 10 }}>

                                        <View style={{ alignItems: 'flex-end' }}>
                                            <TouchableOpacity activeOpacity={0.8} onPress={() => alert()}>
                                                <FontAwesome name="bookmark" size={24} color={color.white} />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={[common.boxOverlay, {
                                            width: width - 40
                                        }]}>
                                            <Text style={common.boxOverlayTitle}>{slide.title} </Text>
                                            <Text style={common.boxOverlayTime} >{moment(slide.time).format('DD/MM/YYYY')} | {moment(slide.time).format('hh:mma')}</Text>
                                        </View>
                                    </ImageBackground>

                                </TouchableOpacity>
                            )

                        })
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}



export default class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: 'News' },
                { key: 'second', title: 'Saved News' },
            ],

            language: [
                { title: 'ENGLISH' },
                { title: 'عربى' }
            ],

            selectedLanguage: 'ENGLISH'
        }
        
    }


    
    render() {
        const { navigation } = this.props;
        const { selectedLanguage } = this.state;
        return (
            <View style={styles.container}>
                <NavigationEvents
                    onWillFocus={() => {
                        this.RBSheetLanguage.open();
                    }}
                />
 

                <LinearGradient
                    colors={[color.gradiend_1, color.gradiend_1, color.gradiend_2]}
                    style={common.overlay}
                >

                    <Header
                        title={'NEWS FEED'}
                        onMenu={() => this.props.navigation.toggleDrawer()}
                    />


                    <TabView
                        navigationState={this.state}
                        renderScene={SceneMap({
                            first: () => <Allnews navigation={this.props.navigation} />,
                            second: () => <Savednews navigation={this.props.navigation} />
                        })}
                        onIndexChange={index => this.setState({ index })}
                        initialLayout={{ width: Dimensions.get('window').width }}
                        renderTabBar={(props) =>
                            <TabBar
                                {...props}
                                activeColor={'red'}
                                renderLabel={({ route, focused }) => (
                                    <View>
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


                    <RBSheet
                        ref={ref => {
                            this.RBSheetLanguage = ref;
                        }}
                        height={100}
                        openDuration={250}
                        customStyles={{
                            container: {
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20
                            }
                        }}
                    >
                        {this.state.language.map((item, index) => {
                            var length = this.state.language.length;
                            return (
                                <View style={[styles.dateContainer, {
                                    borderBottomColor: index == length - 1 ? 'white' : color.gradiend_2,
                                    backgroundColor: selectedLanguage == item.title ? color.gradiend_2 : color.white,
                                }]}>
                                    <TouchableOpacity activeOpacity={0.6}
                                        onPress={() => this.RBSheetLanguage.close()} style={{ width: width }}>
                                        <Text style={[styles.dateText, {
                                            fontFamily: selectedLanguage == item.title ? 'black' : 'medium',
                                            textDecorationLine: selectedLanguage == item.title ? 'underline' : 'none',
                                            color: selectedLanguage == item.title ? color.white : color.gradiend_1,
                                        }]}>{item.title}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                    </RBSheet>




                </LinearGradient>
            </View>
        )
    }
}
