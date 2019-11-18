// @flow
import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { goToContactsPage, goToMessagesPage } from '../redux/router/router.actions';
import { setChatId, loadMessages } from '../redux/messages/messages.actions';
import { LeftArrow } from '../components/LeftArrow';

type Props ={
    items:Array,
    goToContactsPage:()=>{},
    goToMessagesPage:()=>{},
    loadMessages:()=>{},
    forwardedMessage:string
}

const keyExtractor = (item, index) => index.toString();

const Chats = ({
  items,  goToMessagesPage, loadMessages, forwardedMessage
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
  return (
    <View>
      <Header
        leftComponent={<LeftArrow navigateTo="contacts" />}
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
