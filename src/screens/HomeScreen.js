import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  // console.log(props.navigation);
  return <View>
    {/* <Text style={styles.text}>Hello</Text> */}
    <Button
      color='red'
      // onPress={() => { console.log("Go to Component"); }}
      onPress={() => { props.navigation.navigate('ComponentsScreen') }}
      title="Go to ComponentsScreen"
    />
    <Button
      onPress={() => { props.navigation.navigate('ImageScreen') }}
      title="Go to ImageScreen"
    />
    <Button
      color='red'
      onPress={() => { props.navigation.navigate('CounterScreen') }}
      title="Go to CounterScreen"
    />
    <Button
      onPress={() => { props.navigation.navigate('ColorScreen') }}
      title="Go to ColorScreen"
    />
    <Button
      color='red'
      onPress={() => { props.navigation.navigate('SquareScreen') }}
      title="Go to SquareScreen"
    />
    {/* <TouchableOpacity onPress={() => { props.navigation.navigate('ComponentsScreen') }}>
      <Text style={{ fontSize: 20 }}>Go to ComponentsScreen</Text>
      <Text style={{ fontSize: 30 }}> Go to ComponentsScreen</Text>
      <Text style={{ fontSize: 40 }} > Go to ComponentsScreen</Text>
    </TouchableOpacity> */}
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
