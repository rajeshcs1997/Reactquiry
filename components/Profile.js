import React, {useState, useEffect} from 'react';
import { Text, View,TouchableOpacity, StyleSheet,Image, ScrollView, Dimensions } from 'react-native';
import { useQuery } from 'react-query'
const App = (props) => {
	const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://reqres.in/api/users?page=2').then(res =>
      res.json()
    	).then((json) => json.data)
   	)
 
   if (isLoading) return <Text>Loading...</Text>
 
   if (error) return <Text>'An error has occurred: '</Text> + error.message
  console.log("vasgdvndva",data)
  return (
  	<ScrollView>
    {data ? data.map((res, key)=>(
    	<View style={styles.card}>
    		<Image
	        style={{width: 150, height: 150}} 
	        source={{
	          uri: res.avatar,
	        }}
	      />
    		<Text style={styles.textstyle}>Id: {res.id}</Text>
    		<Text style={styles.textstyle}>Name: {res.first_name} {res.last_name}</Text>
    		<Text style={styles.textstyle}> Email:  {res.email}</Text>
    	</View>
    	)) : null}
    </ScrollView>
   ) 
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',	
  },
  card: {
  	flex: 1,
	  backgroundColor: '#ffccaa',
	  width: 'auto',
	  justifyContent: 'center',
	  alignItems: 'center',
	  margin: 20,
	  padding:10,
	  borderRadius:5,
	  elevation: 10
  },
  textstyle:{
  	color: 'grey',
  	fontSize:20
  }
});


export default App;
