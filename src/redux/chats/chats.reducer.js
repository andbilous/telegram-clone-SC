import actionTypes from './chats.types';

const initialState = {
  chats: [],
  isLoading: false,
  currentChatId: 0,
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CHATS:
      return {
        ...state,
        chats: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default chatsReducer;
