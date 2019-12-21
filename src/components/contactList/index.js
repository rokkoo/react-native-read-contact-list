/* eslint-disable react-native/no-inline-styles */

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  PermissionsAndroid,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Contacts from 'react-native-contacts';

const ContactList = ({navigation}) => {
  const [contacts, setContacts] = useState(null);

  // Get contact list
  useEffect(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
    }).then(() => {
      Contacts.getAll((err, contacts) => {
        if (err === 'denied') {
          // error
          console.log(err);
          Alert.alert(err);
        } else {
          // contacts returned in Array

          setContacts(contacts);
        }
      });
    });
  }, []);

  const RenderContact = ({contact}) => {
    const {displayName, phoneNumbers} = contact.item;

    const navigateDetails = () => {
      navigation.navigate('Details', contact.item);
    };

    return (
      <TouchableOpacity onPress={navigateDetails}>
        <Text
          style={{
            padding: 20,
            backgroundColor: '#7159c1',
            margin: 10,
            color: 'white',
            fontSize: 18,
          }}>
          {displayName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={contacts}
        keyExtractor={({recordID}) => recordID}
        renderItem={contact => <RenderContact contact={contact} />}
      />
    </View>
  );
};

export default ContactList;
