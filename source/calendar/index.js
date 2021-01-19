import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    TouchableHighlight,
    Text,
    View,
    ImageBackground,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Platform
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import common from '../common/global';
import color from '../common/color';
var { width, height } = Dimensions.get('window');
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';
import styles from './styles'
import Header from '../common/header';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal';
export default class CalendarPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventshow: false,
            allEvents: [
                {
                    title: 'Lorem ipsum dolor sit amet',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
                    date: moment().format('YYYY-MM-DD')
                },
                {
                    title: 'Lorem ipsum dolor sit amet',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
                    date: moment().format('YYYY-MM-DD')
                },
                {
                    title: 'Lorem ipsum dolor sit amet',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
                    date: moment().format('YYYY-MM-DD')
                },
                {
                    title: 'Lorem ipsum dolor sit amet',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
                    date: moment('2021-01-08').format('YYYY-MM-DD')
                },
                {
                    title: 'Lorem ipsum dolor sit amet',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
                    date: moment('2021-01-26').format('YYYY-MM-DD')
                },
                {
                    title: 'Lorem ipsum dolor sit amet',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
                    date: moment('2021-01-26').format('YYYY-MM-DD')
                }
            ],

            mark: []

        }
    }

    componentDidMount() {
        var today = moment().format('YYYY-MM-DD')
        var selectedEvents = this.state.allEvents.filter(x => x.date === today);
        this.setState({ events: selectedEvents })
        let markDates = [];
        this.state.allEvents.map((item) => {
            if (today != moment(item.date).format('YYYY-MM-DD'))
                markDates.push(moment(item.date).format('YYYY-MM-DD'));
        })
        var obj = markDates.reduce((c, v) => Object.assign(c, { [v]: { marked: true } }), {});
        this.setState({ mark: obj });
    }


    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };


    renderItem({ item, index }) {
        var length = this.state.events.length;
        return (
            <TouchableOpacity activeOpacity={0.9}
                style={{ flex: 1 }}
                onPress={() => this.setState({ eventshow: true })} 
            >
                <View style={[styles.list, {
                    borderBottomWidth: index == length - 1 ? 0 : 1,
                }]}>
                    <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                        <View style={styles.dot} />
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.event}>{item.title}</Text>
                                </View>
                                <Text style={styles.time}>9:00 AM</Text>
                            </View>
                            <Text style={styles.description}>{item.content.length < 75 ? `${item.content}` : `${item.content.substring(0, 75)}...`}</Text>
                        </View>

                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const { navigation } = this.props;
        const { eventshow } = this.state;
        return (
            <View style={styles.container}>

                <LinearGradient
                    colors={[color.gradiend_1, color.gradiend_1, color.gradiend_2]}
                    style={{ flex: 1 }}
                >
                    <Header
                        title={'CALENDAR'}
                        onMenu={() => this.props.navigation.toggleDrawer()}
                    />

                    <View style={{ paddingHorizontal: width * 0.02 }}>
                        <ScrollView style={{ height: height - 142 }} showsVerticalScrollIndicator={false}>

                            <Calendar
                                onDayPress={(day) => {
                                    var selectedEvents = this.state.allEvents.filter(x => x.date === moment(day.dateString).format('YYYY-MM-DD'));
                                    this.setState({ events: selectedEvents })
                                }}
                                markedDates={this.state.mark}
                                style={styles.calendar}
                                theme={{
                                    calendarBackground: 'transparent',
                                    'stylesheet.calendar.header': {
                                        header: {
                                            marginTop: 0,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            backgroundColor: 'white',
                                            borderRadius: 5,
                                            alignItems: 'center'
                                        },
                                        monthText: {
                                            textTransform: 'uppercase',
                                            fontFamily: 'black',
                                            margin: Platform.OS == 'ios' ? 8 : 0,
                                            paddingTop: Platform.OS == 'ios' ? 6 : 0,
                                            color: color.gradiend_1,
                                            fontSize: 20
                                        },
                                        arrow: {
                                            padding: 10,
                                            paddingHorizontal: 15
                                        },
                                        dayHeader: {
                                            marginTop: 10,
                                            marginBottom: 10,
                                            width: 35,
                                            textAlign: 'center',
                                            fontFamily: 'regular',
                                            color: color.white,
                                            fontSize: 17,
                                            textTransform: 'uppercase',
                                        },

                                    },

                                    dayTextColor: color.white,
                                    textDisabledColor: color.grey_5,
                                    dotColor: color.white,
                                    arrowColor: color.gradiend_1,
                                    textDayFontFamily: 'light',

                                    todayTextColor: color.gradiend_1,
                                    todayTextBackground: 'black'
                                }}
                            />

                            <FlatList
                                refreshing={true}
                                keyExtractor={(item, index) => index.toString()}
                                data={this.state.events}
                                extraData={this.state}
                                numColumns={1}
                                renderItem={this.renderItem.bind(this)}
                                scrollEnabled={false}
                                showsVerticalScrollIndicator={false}
                            />

                        </ScrollView>
                    </View>


                    <Modal
                        isVisible={eventshow}
                        // hasBackdrop={false}
                        backdropOpacity={0.3}
                        animationIn="fadeIn"
                        animationOut="zoomOutUp"
                        animationInTiming={600}
                        animationOutTiming={600}
                        backdropTransitionInTiming={600}
                        backdropTransitionOutTiming={600}
                    >

                        <View style={styles.modal}>
                            <View style={styles.language}>
                                <Menu
                                    ref={this.setMenuRef}
                                    button={
                                        <TouchableOpacity onPress={this.showMenu}>
                                            <Image source={require('../../assets/language.png')} style={styles.lanImage} />
                                        </TouchableOpacity>
                                    }
                                >
                                    <MenuItem style={styles.english} textStyle={styles.menuTitle} onPress={this.hideMenu}>English</MenuItem>
                                    <MenuItem style={styles.arabic} textStyle={styles.menuTitle} onPress={this.hideMenu}>Arabic</MenuItem>
                                </Menu>
                            </View>

                            <View style={styles.eventContainer}>
                                <TouchableOpacity activeOpacity={0.7} onPress={() => this.setState({ eventshow: false })} style={styles.closeEvent}>
                                    <MaterialCommunityIcons name="close" size={24} color={color.gradiend_1} />
                                </TouchableOpacity>

                                <Text style={styles.title}>Event Name</Text>
                                <View style={{ paddingTop: 10 }}>
                                    <Text style={styles.eventHeader}>Details</Text>
                                    <Text style={styles.eventDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</Text>
                                </View>

                                <View style={{ paddingTop: 15 }}>
                                    <Text style={styles.eventHeader}>Location</Text>
                                    <Text style={styles.eventDescription}>Lorem ipsum dolor sit amet</Text>
                                </View>

                                <View style={{ paddingTop: 15 }}>
                                    <Text style={styles.eventHeader}>Time</Text>
                                    <Text style={styles.eventDescription}>9:00 AM</Text>
                                </View>
                            </View>
                        </View>
                    </Modal>

                </LinearGradient>
            </View>
        )
    }
}
