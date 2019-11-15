import React from 'react';
import { View, Text, } from 'react-native';
import Button from './Button';

const Message = ({
  avatar, user, text, onRemoveMessage
}) => (
  <View>
    <Text>{avatar}</Text>
    <Text>{user}</Text>
    <Text>{text}</Text>
    <Button title="Delete" />
  </View>
);
export default Message;
