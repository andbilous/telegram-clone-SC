import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList, Alert,
} from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
];
const keyExtractor = (item, index) => index.toString();

const renderItem = ({ item }) => (
  <ListItem
    title={item.name}
    subtitle={item.subtitle}
    leftAvatar={{ source: { uri: item.avatar_url } }}
    bottomDivider
    chevron
  />
);
const Chats = () => (
  <View>
    <Header
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        onPress: () => Alert.alert('ea'),
      }}
      centerComponent={{ text: 'CHAT LIST', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      backgroundColor="#0088cc"
    />
    <FlatList
      keyExtractor={keyExtractor}
      data={list}
      renderItem={renderItem}
    />
  </View>

);
const ChatsContainer = connect(
  (state) => ({
    items: state.chatsReducer.items
  }), null
)(Chats);
export { ChatsContainer as Chats };
