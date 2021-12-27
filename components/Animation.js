import React from 'react';
import { StyleSheet, Text, View, Animated, PanResponder } from 'react-native';

const Animation = (props) => {
	const position = new Animated.ValueXY({x:0, y:0})
	// Animated.timing(position, {
 //      toValue: {x:200, y:500},
 //      duration: 3000,
 //      delay: 2000,
 //    }).start()

	// quicker animation
 //  Animated.spring(position, {
 //      toValue: {x:200, y:500},
 //    }).start()

  const pan = PanResponder.create({
    onMoveShouldSetPanResponder: ()=> true,
    onPanResponderMove:Animated.event([
      null,
      {dx:position.x, dy:position.y}
    ]),
    onPanResponderRelease: ()=>{
      position.setValue({x:0,y:0})
    }
  })
	const rotate = position.x.interpolate({
	  inputRange: [0, 100],
	  outputRange: ['0deg', '360deg']
	});
  return (
    <View style={styles.container}>
      <Animated.View
      {...pan.panHandlers}
      style={{
      	height: 150,
      	width: 150,
      	alignItems: 'center',
      	justifyContent: 'center',
      	backgroundColor: 'green',
      	transform:[
      		{translateX: position.x},
      		{translateY: position.y},
      		// {rotate: rotate}
      	]
      }}>
      	<Text>hello word</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Animation;