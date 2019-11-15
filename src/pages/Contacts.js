import React from 'react';
import {
  FlatList,
  Alert, ScrollView,
} from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import { connect } from 'react-redux';
// Action   setMessages   navigateToMessages

const keyExtractor = (item, index) => index.toString();

const renderItem = ({ item }) => (
  <ListItem
    onPress={() => Alert.alert(item.avatar_url)}
    title={item.name}
    subtitle={item.subtitle}
    leftAvatar={{ source: { uri: item.avatar_url } }}
    bottomDivider
    chevron
  />
);
const Contacts = ({ items }) => (
  <ScrollView>
    <Header
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        onPress: () => Alert.alert('ea'),
      }}
      centerComponent={{ text: 'CONTACT LIST', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      backgroundColor="pink"
    />
    <FlatList
      keyExtractor={keyExtractor}
      data={items}
      renderItem={renderItem}
    />
  </ScrollView>

);
const ContactsContainer = connect(
  (state) => ({
    items: state.contactsReducer.items
  }), null
)(Contacts);
export { ContactsContainer as Contacts };
