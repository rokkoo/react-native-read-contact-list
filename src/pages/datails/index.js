import React from 'react';
import {View, Text} from 'react-native';

const Details = ({route}) => {
  const {displayName, phoneNumbers} = route.params;

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#7159c1',
        margin: 50,
        padding: 10,
        borderRadius: 10,
      }}>
      <Text style={{color: 'white', padding: 5}}>Details</Text>
      <Text style={{color: 'white', padding: 5}}>{displayName}</Text>
      <Text style={{color: 'white', padding: 5}}>{phoneNumbers[0].number}</Text>
    </View>
  );
};

export default Details;
