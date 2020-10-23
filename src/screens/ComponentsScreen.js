import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ComponentsScreen = () => {
    // const name = ['Ten', 'Tien', 'Tuoi', 22, 370];
    // const name = { color: 'red' };
    // const name = <Text>Ten: Tien</Text>
    const name = 'Teo';
    const DATA = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "First Item",
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Second Item",
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Third Item",
        },
    ];
    return <View>
        <Text style={styles.textStyle}>ComponentsScreen</Text>
        <Text style={{ fontSize: 30, color: 'orange' }}>Hi</Text>
        <Text style={{ fontSize: 40, backgroundColor: 'yellow' }}>{name}</Text>
        {/* {name} */}
        <Text style={{ fontSize: 45 }}>React Native</Text>
        <Text style={{ fontSize: 20 }}>Name: {name}</Text>
        <Text>9+5</Text>
        <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={DATA}
            renderItem={({ item }) => {
                return <Text style={{ fontSize: 30, color: 'orange', marginVertical: 20 }}>{item.title} - {item.id}</Text>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: 'red'
    }
})

export default ComponentsScreen;