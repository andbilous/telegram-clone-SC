// @flow
import React from 'react';
import {
  View,
  FlatList, TouchableHighlight, Image,
} from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { goToContactsPage, goToMessagesPage } from '../redux/router/router.actions';
import { setChatId, loadMessages } from '../redux/messages/messages.actions';

type Props ={
    items:Array,
    goToContactsPage:()=>{},
    goToMessagesPage:()=>{},
    loadMessages:()=>{},
    forwardedMessage:string
}

const keyExtractor = (item, index) => index.toString();

const Chats = ({
  items, goToContactsPage, goToMessagesPage, loadMessages, forwardedMessage
}:Props) => {
  const renderItem = ({ item }) => {
    const handleChatClick = () => {
      const messagesChat = items.filter((chat) => chat.id === item.id)[0].messages;
      if (forwardedMessage.id === item.id) {
        messagesChat.push(forwardedMessage);
      }
      loadMessages(messagesChat);
      goToMessagesPage();
    };
    return (
      <ListItem
        title={item.id}
        leftAvatar={{ source: { uri: '/Users/andbilous/Desktop/TelegramCloneDraft/assets/chat.png' } }}
        bottomDivider
        chevron
        onPress={handleChatClick}
      />
    );
  };
  const LeftArrow = () => (
    <TouchableHighlight onPress={goToContactsPage}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: '/Users/andbilous/Desktop/TelegramCloneDraft/assets/left-arrow.png' }}
      />
    </TouchableHighlight>
  );
  return (
    <View>
      <Header
        leftComponent={<LeftArrow />}
        centerComponent={{ text: 'CHATS', style: { color: '#fff' } }}
        backgroundColor="#0088cc"
      />
      <FlatList
        keyExtractor={keyExtractor}
        data={items}
        renderItem={renderItem}
      />
    </View>
  );
};
const ChatsContainer = connect(
  (state) => ({
    items: state.chatsReducer.items,
    forwardedMessage: state.chatsReducer.forwardedMessage
  }), (dispatch) => ({
    goToContactsPage: () => dispatch(goToContactsPage()),
    setChatId: (id) => dispatch(setChatId(id)),
    goToMessagesPage: () => dispatch(goToMessagesPage()),
    loadMessages: (items) => dispatch(loadMessages(items))
  })
)(Chats);
export { ChatsContainer as Chats };
