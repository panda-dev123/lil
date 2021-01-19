import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    View,
    Dimensions, Button
} from 'react-native';


var { width, height } = Dimensions.get('window');
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import styles from './styles'
import color from '../common/color';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../common/back'
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.navigation.getParam('url'),
            title: this.props.navigation.getParam('title')
        }
    }

    _videoRef;

    componentDidMount() {
        this.showVideoInFullscreen()
    }
    showVideoInFullscreen = async () => {
        const status = await this._videoRef.presentFullscreenPlayer();
        console.log(status)
    }

    dismissVideoFromFullscreen = async () => {
        const status = await this._videoRef.dismissFullscreenPlayer();
        console.log(status);
    }

    onFullscreenUpdate = ({ fullscreenUpdate, status }) => {
        console.log(fullscreenUpdate, status)
        switch (fullscreenUpdate) {
            case Video.FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT:
                console.log(' the fullscreen player is about to present');
                break;
            case Video.FULLSCREEN_UPDATE_PLAYER_DID_PRESENT:
                console.log('the fullscreen player just finished presenting');
                break;
            case Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS:
                console.log('the fullscreen player is about to dismiss');
                break;
            case Video.FULLSCREEN_UPDATE_PLAYER_DID_DISMISS:
                console.log('the fullscreen player just finished dismissing');
        }
    }

    render() {
        const { url, title } = this.state;
        return (
            <View style={[styles.container]}>
                <LinearGradient
                    colors={[color.gradiend_1, color.gradiend_1, color.gradiend_2]}
                  
                >

                    <Header
                        title={title.length < 15
                            ? `${title}`
                            : `${title.substring(0, 15)}..`}
                        onMenu={() => this.props.navigation.goBack()}
                        style={{ position: 'aboslute'}}
                    />

                    <Video
                        ref={(ref) => (this._videoRef = ref)}
                        source={{ uri: url }}
                        resizeMode="contain"
                        shouldPlay={true}
                        useNativeControls
                        onFullscreenUpdate={this.onFullscreenUpdate}
                        style={{ width: width, height: height - 70 }}
                    />
               </LinearGradient>
            </View>
        );
    }
}