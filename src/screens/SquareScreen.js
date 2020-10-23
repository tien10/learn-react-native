import React, { useReducer } from 'react';
import { View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 51;

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : { ...state, red: state.red + action.payload }
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : { ...state, green: state.green + action.payload }
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : { ...state, blue: state.blue + action.payload }

        default:
            return state;
    }
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    console.log(state);
    return <View>
        <ColorCounter
            onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
            color="red"
        />
        <ColorCounter
            onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
            color="green"
        />
        <ColorCounter
            onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
            color="blue"
        />
        <View
            style={{
                height: 150,
                width: 150,
                backgroundColor: `rgb(${state.red},${state.green},${state.blue})`
            }}
        />
    </View>
}

export default SquareScreen;