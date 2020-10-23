import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Button, TextInput } from 'react-native';
import { View, Text } from 'react-native';
import yelp from '../api/yelp'

const TextScreen = () => {
    const [text, setText] = useState('')
    const [users, setUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
    const usersApi = async () => {
        try {
            const res = await yelp.get('/users', {
                params: {}
            })
            setUsers(res.data)
            // console.log('users[0]: ', users[0]);
        } catch (error) {
            // console.log(error);
            setErrorMessage('Something went wrong')
        }
    }
    // const flag = text.length < 5 ? true : false
    return <View>
        <Button title='Get users' onPress={usersApi} ></Button>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <FlatList
            data={users}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return <Text>{item.name}</Text>
            }}
        />
        <Text>Users: {users.length}</Text>
        {/* <Text style={{ fontSize: 20 }}>Enter your password</Text>
        <TextInput
            secureTextEntry={true}
            placeholder='Enter your password'
            style={{ height: 40, borderColor: 'red', borderWidth: 1, margin: 15 }}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(newText) => { setText(newText) }}
            value={text}
        />
        <Text style={{ fontSize: 20 }}>Your password is: {text}</Text>
        {text.length < 5 ? <Text>Password phải dài hơn 5 ký tự</Text> : null} */}

    </View>
}

export default TextScreen;