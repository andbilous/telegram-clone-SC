import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList, Alert,
} from 'react-native';
import { Header } from 'react-native-elements';
import { connect} from 'react-redux';
import {
  addMessage, deleteMessage,
} from '../redux/messages/messages.actions';

const keyExtractor = (item, index) => index.toString();


const Messages = ({
  items, addMessage, deleteMessage,
}) => {

  const [value, onChangeText] = useState('');
  const addHandler = () => {
    if (!value) { return; }
    addMessage(value);
    onChangeText('');
  };
  const renderItem = ({ item }) => {
    const handleDelete = () => {
      deleteMessage(item.id);
    };
    return (
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          placeholder="Enter Message"
          value={item.message}
        />
        <TouchableOpacity onPress={handleDelete}><Text>              Delete</Text></TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => Alert.alert('ea'),
        }}
        centerComponent={{ text: 'Private Chat', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        backgroundColor="pink"
      />
      <FlatList
        keyExtractor={keyExtractor}
        data={items}
        renderItem={renderItem}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <TouchableOpacity onPress={addHandler}><Text>Add</Text></TouchableOpacity>
    </View>
  );
};
const MessagesContainer = connect(
  (state) => ({
    items: state.messagesReducer.items
  }), (dispatch) => ({
    addMessage: (message) => dispatch(addMessage(message)),
    deleteMessage: (message) => dispatch(deleteMessage(message))
  })
)(Messages);
export { MessagesContainer as Messages };
