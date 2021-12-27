import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
//import Animation from './Animation'
const Login = (props) => {

  return (
    <View style={styles.container}>
    	<TouchableOpacity
        style={styles.button}
        onPress={ () =>{
          props.navigation.navigate("Storage")
        }}
      >
        <Text>AsyncStorage</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={ () =>{
          props.navigation.navigate("Animation")
        }}
      >
        <Text>Animation</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={ () =>{
          props.navigation.navigate("Profile")
        }}
      >
        <Text>React Query</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    padding: 10,
    width: 300,
    backgroundColor : 'green',
    margin: 70,
  },
});

export default Login;