import React, { Component } from 'react';
import { 
    View, 
    Image, 
    ImageBackground, 
    Platform, 
    Text,
    ActivityIndicator, 
    TouchableWithoutFeedbackBase 
} from 'react-native';
 

class CacheImageBackground extends Component<> {
    constructor(props) {
        super(props);
        this.state = {
            source: { uri: '' },
            isLoading: false
        };
    }

    componentDidMount() {
        const { uri } = this.props; 
        this.setState({
            isLoading: true
        });
        this.loadFile(uri);
    }

    async componentDidUpdate(prevProps: any) {
        if (prevProps.uri !== this.props.uri) {
            const { uri } = this.props;
            this.loadFile(uri);
        }
    }

    loadFile = (path: string) => {  
        this.setState({
            source: { uri: path },
            isLoading: false
        });
    };

    render() {
        const { imageStyle, style } = this.props;
        return (
            this.state.isLoading ?
                <View style={[style, imageStyle]}>
                    <ActivityIndicator size='small' color='#b489fe' style={[{ flex: 1 }]} />
                </View> :
                <ImageBackground
                    source={this.state.source}
                    style={[style]}
                    imageStyle={imageStyle}>
                    {this.props.children}
                </ImageBackground>
        );
    }
}

export default CacheImageBackground;
