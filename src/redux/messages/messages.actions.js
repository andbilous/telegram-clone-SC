
import actionTypes from './messages.types';


export const loadMessages = (items) => ({
  type: actionTypes.LOAD_MESSAGES,
  payload: items
});

export const addMessage = (message) => ({
  type: actionTypes.ADD_MESSAGE,
  payload: message
});

export const deleteMessage = (id) => ({
  type: actionTypes.REMOVE_MESSAGE,
  payload: id
});
export const filterMessages = (message) => ({
  type: actionTypes.FILTER_MESSAGES,
  payload: message
});
