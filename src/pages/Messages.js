// @flow
import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  FlatList, Button, StyleSheet, Animated, TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import {
  addMessage, deleteMessage, filterMessages
} from '../redux/messages/messages.actions';
import { setForwardedMessage } from '../redux/chats/chats.actions';
import { goToChatsPage } from '../redux/router/router.actions';
import { LeftArrow } from '../components/LeftArrow';

type Props={
  style:Object,
  children:Object
}

const FadeInView = (props:Props) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const keyExtractor = (item, index) => index.toString();


const Messages = ({
  items, addMessage, deleteMessage, filterMessages, goToChatsPage, setForwardedMessage
}) => {
  const [value, onChangeText] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [forwardId, setForwardId] = useState('');

  const handleFilter = () => {
    filterMessages(searchWord);
  };
  const addHandler = () => {
    if (!value) { return; }
    addMessage(value);
    onChangeText('');
  };

  const renderItem = ({ item }) => {
    const handleDelete = () => {
      deleteMessage(item.id);
    };
    const handleForward = () => {
      setForwardedMessage({ id: forwardId, message: item.message });
    };
    return (
      <FadeInView>
        <View
          style={styles.messageStyle}
        >
          <Text>{item.message}</Text>
          <View style={{ position: 'absolute', right: 70, top: 10 }}>
            <TextInput
              style={{ borderWidth: 1, marginBottom: 1 }}
              onChangeText={(id) => setForwardId(id)}
              placeholder="Name"
            />
            <TouchableOpacity
              style={{ borderWidth: 1 }}
              onPress={handleForward}
            >
              <Text>Forward</Text>
            </TouchableOpacity>
          </View>
          <Button
            title="Delete"
            onPress={handleDelete}
          />
        </View>
      </FadeInView>
    );
  };
  return (
    <View style={{ margin: 10 }}>
      <Header
        leftComponent={<LeftArrow navigateTo="chats" />}
        centerComponent={{ text: 'Private Chat', style: { color: '#fff' } }}
        backgroundColor="#0088cc"
      />
      <Text style={styles.header}>Messages</Text>
      <TextInput
        placeholder="Enter message to filter"
        onChangeText={(text) => setSearchWord(text)}
        value={searchWord}
        style={styles.searchInput}
      />
      <Button
        title="Filter Messages"
        onPress={handleFilter}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextInput
          style={styles.input}
          placeholder="Enter your message"
          onChangeText={(text) => onChangeText(text)}
          value={value.toString()}
        />
        <TouchableOpacity onPress={addHandler}>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: '/Users/andbilous/Desktop/TelegramCloneDraft/assets/send-btn.png' }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        initialNumToRender={20}
        style={{ marginTop: 50 }}
        keyExtractor={keyExtractor}
        data={items}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    marginBottom: 20,
    alignSelf: 'center'
  },
  input: {
    height: 50,
    width: '80%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#009688',
    padding: 5,
    marginLeft: 6
  },
  searchInput: {
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#009688',
    marginBottom: 10,
    width: '40%',
    alignSelf: 'center'
  },
  messageStyle: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    backgroundColor: 'rgba(181, 187, 197, 0.82)'
  },
});
const MessagesContainer = connect(
  (state) => ({
    chatId: state.messagesReducer.currentChatId,
    items: state.messagesReducer.items
  }), (dispatch) => ({
    addMessage: (message) => dispatch(addMessage(message)),
    deleteMessage: (message) => dispatch(deleteMessage(message)),
    filterMessages: (message) => dispatch(filterMessages(message)),
    goToChatsPage: () => dispatch(goToChatsPage()),
    setForwardedMessage: (message) => dispatch(setForwardedMessage(message))
  })
)(Messages);
export { MessagesContainer as Messages };
