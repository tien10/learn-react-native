import React, { useState } from 'react'
import { Button } from 'react-native';
import { View, Text } from 'react-native'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    console.log(counter);
    return <View>
        <Button onPress={() => {
            setCounter(counter + 1)
        }} color='red' title="+"></Button>
        <Button onPress={() => {
            setCounter(counter - 1)
        }} title="-"></Button>
        <Text>Current Count: {counter}</Text>
    </View>
}

export default CounterScreen;