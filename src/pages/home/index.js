import React from 'react';
import {View, Text, Button} from 'react-native';

// Components
import ContactList from '../../components/contactList';

const Home = ({navigation}) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <View>
      <Text>Home</Text>
      <ContactList navigation={navigation} />
      <Button title={'Go to details screen'} onPress={navigateDetails}>
        Go to details
      </Button>
    </View>
  );
};

export default Home;
