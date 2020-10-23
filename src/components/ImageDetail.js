import React from 'react';
import { Image, Text, View } from 'react-native';

const ImageDetail = (props) => {
    console.log(props);
    return <View>
        <Image source={props.imageSource} />
        <Text>{props.title}</Text>
        <Text>Score: {props.score}</Text>
    </View>
}
//Luoi viet StyleSheet :)

export default ImageDetail;