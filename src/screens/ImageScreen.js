import React from 'react';
import { Text, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return <View>
        <ImageDetail title="Teo" imageSource={require('../../assets/forest.jpg')} score={9} />
        <ImageDetail title="Ti" imageSource={require('../../assets/beach.jpg')} score={8} />
        <ImageDetail title="Suu" imageSource={require('../../assets/mountain.jpg')} score={7} />
    </View>
}
//Luoi viet StyleSheet :)

export default ImageScreen;