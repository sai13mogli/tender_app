import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const HomeScreen = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c3e50',
      }}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Listing')}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
