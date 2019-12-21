import React from 'react';
import {View, Text, Button} from 'react-native';

// Components
import ContactList from '../../components/contactList';

const Home = ({navigation}) => {
  return (
    <View>
      <Text style={{fontSize: 20, padding: 10, fontWeight: '800'}}>
        List of contacts
      </Text>
      <ContactList navigation={navigation} />
    </View>
  );
};

export default Home;
