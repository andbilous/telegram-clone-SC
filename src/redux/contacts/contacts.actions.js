import actionTypes from './contacts.types';

export const loadContacts = (items) => ({
  type: actionTypes.LOAD_CONTACTS,
  payload: items
});
