import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  FlatList, ScrollView, Button, StyleSheet, Animated, TouchableHighlight,
} from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import {
  addMessage, deleteMessage, filterMessages
} from '../redux/messages/messages.actions';
import { goToChatsPage } from '../redux/router/router.actions';


const FadeInView = (props) => {
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
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const keyExtractor = (item, index) => index.toString();


const Messages = ({
  items, addMessage, deleteMessage, filterMessages, goToChatsPage
}) => {
  const [value, onChangeText] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const LeftArrow = () => (
    <TouchableHighlight onPress={goToChatsPage}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: '/Users/andbilous/Desktop/TelegramCloneDraft/assets/left-arrow.png' }}
      />
    </TouchableHighlight>

  );

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
    return (
      <FadeInView>
        <View
          style={styles.messageStyle}
        >
          <Text>{item.message}</Text>
          <Button
            title="Delete"
            onPress={handleDelete}
          />
        </View>
      </FadeInView>
    );
  };
  return (
    <ScrollView style={{ margin: 10 }}>
      <Header
        leftComponent={<LeftArrow />}
        centerComponent={{ text: 'Private Chat', style: { color: '#fff' } }}
        // rightComponent={{ icon: 'home', color: '#fff' }}
        backgroundColor="#0088cc"
      />
      <Text style={styles.header}>Messages</Text>
      <TextInput
        onChangeText={(text) => setSearchWord(text)}
        value={searchWord}
        style={styles.searchInput}
      />
      <Button
        style={styles.btnStyle}
        title="Filter Messages"
        onPress={handleFilter}
      />
      <FlatList
        style={{ marginTop: 50 }}
        keyExtractor={keyExtractor}
        data={items}
        renderItem={renderItem}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextInput
          style={styles.input}
          placeholder="Enter your message"
          onChangeText={(text) => onChangeText(text)}
          value={value.toString()}
        />
        <TouchableHighlight onPress={addHandler}>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: '/Users/andbilous/Desktop/TelegramCloneDraft/assets/send-btn.png' }}
          />
        </TouchableHighlight>
      </View>

    </ScrollView>
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
  btnStyle: {
    borderTopWidth: 30,
    borderRightWidth: 20,
    borderBottomWidth: 30,
    borderLeftWidth: 60,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'red',
  },
  messageStyle: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    backgroundColor: 'rgba(181, 187, 197, 0.82)'
  }
});
const MessagesContainer = connect(
  (state) => ({
    items: state.messagesReducer.items
  }), (dispatch) => ({
    addMessage: (message) => dispatch(addMessage(message)),
    deleteMessage: (message) => dispatch(deleteMessage(message)),
    filterMessages: (message) => dispatch(filterMessages(message)),
    goToChatsPage: () => dispatch(goToChatsPage())
  })
)(Messages);
export { MessagesContainer as Messages };
