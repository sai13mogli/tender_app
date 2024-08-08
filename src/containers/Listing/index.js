import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const ListingScreen = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c3e50',
      }}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Text>Listing</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListingScreen;
