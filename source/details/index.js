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
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
    FlatList
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import common from '../common/global';
import color from '../common/color';
var { width, height } = Dimensions.get('window');

import styles from './styles'
import Header from '../common/back';
import RBSheet from "react-native-raw-bottom-sheet";
import moment from 'moment';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';

import Constants from 'expo-constants';
export default class Live extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyboardSpace: '',
            comments: [
                { name: 'Name', description: 'Lorem ipsum quia dolor sit amet' },
                { name: 'Name', description: 'Lorem ipsum quia dolor sit amet' },
                { name: 'Name', description: 'Lorem ipsum quia dolor sit amet' },
                { name: 'Name', description: 'Lorem ipsum quia dolor sit amet' },
                { name: 'Name', description: 'Lorem ipsum quia dolor sit amet' },
                { name: 'Name', description: 'Lorem ipsum quia dolor sit amet' }
            ]
        }

        Keyboard.addListener('keyboardDidShow', frames => {
            if (!frames.endCoordinates) return;
            this.setState({ keyboardSpace: frames.endCoordinates.height });
        });

        Keyboard.addListener('keyboardDidHide', frames => {
            this.setState({ keyboardSpace: '' });
        });
    }


    renderItem({ item, index }) {
        const lengthArray = this.state.comments.length;
        return (
            <View style={[styles.commentList, {
                borderBottomWidth: index == lengthArray - 1 ? 0 : 1
            }]}>
                <View style={styles.commentListLeft}>
                    <Image source={require('../../assets/user.jpg')} style={styles.commentListUser} />
                </View>
                <View style={styles.commentListRight}>
                    <Text style={styles.commentTitle}>{item.name}</Text>
                    <Text style={styles.commentDes}>{item.description}</Text>
                </View>
                <View style={styles.commentListFav}>
                    <FontAwesome name="heart-o" size={24} color={color.black} />
                </View>
            </View>
        );
    }


    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>

                <StatusBar backgroundColor={'transparent'} style="light"/>

                <ImageBackground
                    source={require('../../assets/news.png')}
                    style={[common.boxImage, {
                        width: width,
                        height: height * 40/100
                    }]}
                    imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>


                    <View style={styles.top}>
                        <View style={styles.topLeft}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.goBack()}>
                                <Ionicons name="chevron-back-sharp" size={30} color={color.white} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.topRight}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => console.log('bookmark')}>
                                <FontAwesome name="bookmark-o" size={24} color={color.white} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={[common.boxOverlay, {
                        width: width,
                        borderRadius: 20,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        alignItems: 'center',
                    }]}>
                        <Text style={[common.boxOverlayTitle, {
                            marginBottom: this.state.modal ? 20 : 0
                        }]}>Peaceful protest inbeirut turns into violence</Text>
                    </View>
                </ImageBackground>

                <View style={styles.datenav}>
                    <View style={styles.dateLeft}>
                        <Text style={styles.title}>People</Text>
                    </View>
                    <View style={styles.dateRight}>
                        <Text style={styles.date} >{moment('2020-11-17 17:30:00').format('DD/MM/YYYY')} | {moment('2020-11-17 17:30:00').format('hh:mma')}</Text>
                    </View>
                </View>

                <View style={styles.commentnav}>
                    <View style={styles.commentLeft}>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => this.setState({ modal: true })}>
                            <View style={styles.commentBoxButton}>
                                <Text style={styles.commentBoxButtonTitle}>100 comments</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.commentRight}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="heart-o" size={24} color={color.black} style={{ paddingRight: 20 }} />
                            <MaterialCommunityIcons name="share-variant" size={24} color={color.black} onPress={() => this.RBSheet.open()} />
                        </View>
                    </View>
                </View>

                <ScrollView>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    </View>
                </ScrollView>


                {/* share sheet */}
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    height={100}
                    openDuration={250}
                    customStyles={{
                        container: {
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }
                    }}
                >
                    <View style={styles.shareContainer}>
                        <View style={styles.shareBox}>
                            <TouchableOpacity onPress={() => this.RBSheet.open()} activeOpacity={0.9}>
                                <ImageBackground source={require('../../assets/gradient.png')} style={styles.shareBG} resizeMode={'contain'}>
                                    <FontAwesome name="facebook-f" size={35} color={color.white} />
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.shareBox}>
                            <TouchableOpacity activeOpacity={0.9} onPress={() => this.RBSheet.open()}>
                                <ImageBackground source={require('../../assets/gradient.png')} style={styles.shareBG} resizeMode={'contain'}>
                                    <FontAwesome name="instagram" size={35} color={color.white} style={{ marginTop: -2 }} />
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.shareBox}>
                            <TouchableOpacity activeOpacity={0.9} onPress={() => this.RBSheet.open()}>
                                <ImageBackground source={require('../../assets/gradient.png')} style={styles.shareBG} resizeMode={'contain'}>
                                    <FontAwesome name="twitter" size={35} color={color.white} />
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.shareBox}>
                            <TouchableOpacity activeOpacity={0.9} onPress={() => this.RBSheet.open()}>
                                <ImageBackground source={require('../../assets/gradient.png')} style={styles.shareBG} resizeMode={'contain'}>
                                    <FontAwesome name="whatsapp" size={35} color={color.white} style={{ marginTop: -5 }} />
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    </View>

                </RBSheet>


                {/* comment sheet */}

                <Modal isVisible={this.state.modal}
                    backdropOpacity={0.1}
                    onBackdropPress={() => this.setState({ modal: false })}
                    style={styles.modal}

                >
                    <KeyboardAvoidingView
                        behavior="padding"
                        style={styles.modal_inner}
                    >
                        <View style={styles.datenav}>
                            <View style={styles.dateLeft}>
                                <Text style={styles.title}>People</Text>
                            </View>
                            <View style={styles.dateRight}>
                                <Text style={styles.date} >{moment('2020-11-17 17:30:00').format('DD/MM/YYYY')} | {moment('2020-11-17 17:30:00').format('hh:mma')}</Text>
                            </View>
                        </View>

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


                        <FlatList
                            refreshing={true}
                            keyExtractor={(item, index) => index.toString()}
                            data={this.state.comments}
                            extraData={this.state}
                            numColumns={1}
                            renderItem={this.renderItem.bind(this)}
                            scrollEnabled={true}
                            showsVerticalScrollIndicator={false}
                        />
                    </KeyboardAvoidingView>
                </Modal>


            </View>
        )
    }
}
