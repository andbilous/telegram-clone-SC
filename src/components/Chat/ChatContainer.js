import React from 'react';
import { ScrollView, Text } from 'react-native';
import MessagesList from './MessagesList';
import NewMessage from './NewMessage';

const ChatContainer = () => (
  <ScrollView>
    <Text>Chat</Text>
    <MessagesList />
    <NewMessage />
  </ScrollView>
);

export default ChatContainer;
