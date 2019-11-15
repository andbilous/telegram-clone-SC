import React from 'react';
import { ScrollView, FlatList, TextInput } from 'react-native';

const NewMessage = () => (
  <ScrollView>
    <TextInput
      value="Enter New Message"
    >
New Message
      {' '}
    </TextInput>
  </ScrollView>
);

export default NewMessage;
