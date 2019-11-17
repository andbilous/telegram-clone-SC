import actionTypes from './chats.types';

const initialState = {
  items: [],
  isLoading: false,
  forwardedMessage: {}
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CHATS:
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    case actionTypes.SET_FORWARDED_MESSAGE:
      return {
        ...state,
        forwardedMessage: action.payload
      };
    default:
      return state;
  }
};

export default chatsReducer;
