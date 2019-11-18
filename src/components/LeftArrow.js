import React from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { goToChatsPage, goToProfilePage, goToContactsPage } from '../redux/router/router.actions';

const LeftArrow = ({
  navigateTo, goToProfilePage, goToChatsPage, goToContactsPage
}) => {
  const onArrowPressHandler = () => {
    switch (navigateTo) {
      case 'chats':
        goToChatsPage();
      case 'contacts':
        goToContactsPage();
      case 'profile':
        goToProfilePage();
      default: '';
    }
  };
  return (
    <TouchableHighlight onPress={onArrowPressHandler}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: '/Users/andbilous/Desktop/TelegramCloneDraft/assets/left-arrow.png' }}
      />
    </TouchableHighlight>
  );
};

//
// const LeftArrow = () => (
//     <TouchableHighlight onPress={goToContactsPage}>
//         <Image
//             style={{ width: 50, height: 50 }}
//             source={{ uri: '/Users/andbilous/Desktop/TelegramCloneDraft/assets/left-arrow.png' }}
//         />
//     </TouchableHighlight>
// );
// const LeftArrow = () => (
//     <TouchableHighlight onPress={goToProfilePage}>
//         <Image
//             style={{ width: 50, height: 50 }}
//             source={{ uri: '/Users/andbilous/Desktop/TelegramCloneDraft/assets/left-arrow.png' }}
//         />
//     </TouchableHighlight>
// );
const LeftArrowContainer = connect(
  null, (dispatch) => ({
    goToProfilePage: () => dispatch(goToProfilePage()),
    goToChatsPage: () => dispatch(goToChatsPage()),
    goToContactsPage: () => dispatch(goToContactsPage()),
  })
)(LeftArrow);
export { LeftArrowContainer as LeftArrow };
