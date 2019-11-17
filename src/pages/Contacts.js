// @flow
import React from 'react';
import {
  FlatList,
  Alert, TouchableHighlight, Image,
} from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { goToProfilePage, goToChatsPage } from '../redux/router/router.actions';

type Props ={
    items:Array,
    goToProfilePage:()=>{},
    goToChatsPage:()=>{},
}

const keyExtractor = (item, index) => index.toString();

const renderItem = ({ item }) => (
  <ListItem
    onPress={() => Alert.alert(item.name, item.subtitle)}
    title={item.name}
    subtitle={item.subtitle}
    leftAvatar={{ source: { uri: item.avatar_url } }}
    bottomDivider
  />
);
const Contacts = ({ items, goToProfilePage, goToChatsPage }:Props) => {
  const LeftArrow = () => (
    <TouchableHighlight onPress={goToProfilePage}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: '/Users/andbilous/Desktop/TelegramCloneDraft/assets/left-arrow.png' }}
      />
    </TouchableHighlight>
  );
  const RightArrow = () => (
    <TouchableHighlight onPress={goToChatsPage}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: '/Users/andbilous/Desktop/TelegramCloneDraft/assets/right-arrow.png' }}
      />
    </TouchableHighlight>
  );
  return (
    <>
      <Header
        leftComponent={<LeftArrow />}
        rightComponent={RightArrow}
        centerComponent={{ text: 'CONTACT LIST', style: { color: '#fff' } }}
        backgroundColor="#0088cc"
      />
      <FlatList
        keyExtractor={keyExtractor}
        data={items}
        renderItem={renderItem}
      />
    </>
  );
};
const ContactsContainer = connect(
  (state) => ({
    items: state.contactsReducer.items
  }), (dispatch) => ({
    goToProfilePage: () => dispatch(goToProfilePage()),
    goToChatsPage: () => dispatch(goToChatsPage())
  })
)(Contacts);
export { ContactsContainer as Contacts };
