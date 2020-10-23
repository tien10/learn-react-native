import React, { useState } from 'react';
import { View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
    const COLOR_INCREMENT = 51;
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);
    console.log('red:', red);
    console.log('green:', green);
    console.log('blue:', blue);
    const setColor = (color, change) => {
        // if (color === 'red') {
        //     if (red + change > 255 || red + change < 0) {
        //         console.log('err');
        //         return;
        //     } else {
        //         setRed(red + change)
        //     }
        // }
        // chuyen if thanh switch case
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                break;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                break;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                break;
            default:
                break;
        }
    }
    return <View>
        <ColorCounter
            onIncrease={() => setColor('red', COLOR_INCREMENT)}
            onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
            color="red"
        />
        <ColorCounter
            onIncrease={() => setColor('green', COLOR_INCREMENT)}
            onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
            color="green"
        />
        <ColorCounter
            onIncrease={() => setColor('blue', COLOR_INCREMENT)}
            onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
            color="blue"
        />
        <View
            style={{
                height: 150,
                width: 150,
                backgroundColor: `rgb(${red},${green},${blue})`
            }}
        />
    </View>
}

export default SquareScreen;