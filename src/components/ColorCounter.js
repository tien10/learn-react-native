import React from 'react';
import { Button } from 'react-native';
import { View, Text } from 'react-native';

const ColorCounter = (props) => {
    // console.log(props);
    return <View>
        <Text>{props.color}</Text>
        <Button
            onPress={() => props.onIncrease()}
            color={`${props.color}`}
            title={`+ ${props.color}`}
        />
        <Button
            onPress={() => props.onDecrease()}
            color={`${props.color}`}
            title={`- ${props.color}`}
        />
        <Text></Text>
    </View>
}

export default ColorCounter;