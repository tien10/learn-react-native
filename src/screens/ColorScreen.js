import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { Button } from 'react-native'
import { View } from 'react-native'

const ColorScreen = () => {
    const [colors, setColors] = useState([])
    // console.log(colors);
    return <View>
        <Button title="Add color"
            onPress={() => {
                setColors([...colors, randomColor()])
            }}
        ></Button>
        <FlatList
            keyExtractor={item => item}
            data={colors}
            renderItem={({ item }) => {
                console.log(item);
                return <View
                    style={{ height: 100, width: 100, backgroundColor: item }}
                />
            }}
        />
    </View>
}

const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`
}

// StyleSheet

export default ColorScreen