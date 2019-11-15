// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   FlatList
// } from 'react-native';
// import { connect } from 'react-redux';
//
// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];
// function Item({
//   id, title, selected, onSelect
// }) {
//   return (
//     <TouchableOpacity
//       onPress={() => onSelect(id)}
//       style={[
//         styles.item,
//         { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
//       ]}
//     >
//       <Text style={styles.title}>{title}</Text>
//     </TouchableOpacity>
//   );
// }
// const Chats = () => {
//   const [selected, setSelected] = useState(new Map());
//   const onSelect = React.useCallback(
//     (id) => {
//       const newSelected = new Map(selected);
//       newSelected.set(id, !selected.get(id));
//
//       setSelected(newSelected);
//     },
//     [selected],
//   );
//   return (
//     <View>
//       <Text>Chats</Text>
//       <FlatList
//         data={DATA}
//         renderItem={({ item }) => (
//           <Item
//             id={item.id}
//             title={item.title}
//             selected={!!selected.get(item.id)}
//             onSelect={onSelect}
//           />
//         )}
//         keyExtractor={(item) => item.id}
//         extraData={selected}
//       />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });
//
// export default Chats;
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
      centerComponent={{ text: 'CONTACT LIST', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      backgroundColor="pink"
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
