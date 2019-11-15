import actionTypes from './chats.types';

export const loadChats = (items) => (
  {
    type: actionTypes.LOAD_CHATS,
    payload: items
  });
