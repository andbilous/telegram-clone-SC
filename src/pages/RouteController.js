import React from 'react';
import { connect } from 'react-redux';
import Auth from './Auth';
import { Chats } from './Chats';
import { Contacts } from './Contacts';
import { Messages } from './Messages';
import { Profile } from './Profile';

const RouteController = ({ currentPage }) => {
  switch (currentPage) {
    case 'AUTH':
      return <Auth />;
    case 'CONTACTS':
      return <Contacts />;
    case 'CHATS':
      return <Chats />;
    case 'MESSAGES':
      return <Messages />;
    case 'PROFILE':
      return <Profile />;
    default: return <RouteController />;
  }
};
const RouteControllerContainer = connect(
  (state) => ({
    currentPage: state.routerReducer.currentPage
  }),
)(RouteController);

export { RouteControllerContainer as RouteController };
