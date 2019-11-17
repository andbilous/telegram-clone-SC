import actionTypes from './chats.types';

export const loadChats = (items) => (
  {
    type: actionTypes.LOAD_CHATS,
    payload: items
  });

export const setForwardedMessage = (message) => (
  {
    type: actionTypes.SET_FORWARDED_MESSAGE,
    payload: message
  });
