import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AsyncStorage  from '@react-native-async-storage/async-storage';

const Storage = (props) => {
	const [data, setData] = useState("user");
	const _storeData = async () => {
  try {
    await AsyncStorage.setItem(
      'user',
      'mukesh'
    );
    const value = await AsyncStorage.getItem('user');
    setData(value)
  } catch (error) {
    console.log("asyncerror====",error)
  }
};
  return (
    <View style={styles.container}>
      <Button
				onPress={_storeData}
				title="Show Data"
				color="#841584"
			/>
			<Text>{data}</Text>
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
});

export default Storage;