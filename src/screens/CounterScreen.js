import React, { useReducer } from 'react'
import { Button } from 'react-native';
import { View, Text } from 'react-native'

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_counter_add':
            return { ...state, counter: state.counter + action.payload }
        case 'change_counter_sub':
            return { ...state, counter: state.counter + action.payload }

        default:
            return state;
    }
}

const CounterScreen = () => {
    // const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, { counter: 0 })
    // console.log(counter);
    console.log(state);
    return <View>
        <Button onPress={() => {
            // setCounter(counter + 1)
            dispatch({ type: 'change_counter_add', payload: COUNTER_INCREMENT })
        }} color='red' title="+"></Button>
        <Button onPress={() => {
            // setCounter(counter - 1)
            dispatch({ type: 'change_counter_sub', payload: -1 * COUNTER_INCREMENT })
        }} title="-"></Button>
        <Text>Current Count: {state.counter}</Text>
    </View>
}

export default CounterScreen;