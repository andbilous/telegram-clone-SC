import actionTypes from './contacts.types';

const initialState = {
  items: [],
  isLoading: false,
};

const ContactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CONTACTS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

export default ContactsReducer;
