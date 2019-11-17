import actionTypes from './messages.types';

const initialState = {
  items: [],
  isLoading: false
};
const MessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
      return {
        ...state,
        items: [...state.items, { id: Math.floor(Math.random() * (1000)), message: action.payload }]
      };
    case actionTypes.REMOVE_MESSAGE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload)
      };
    case actionTypes.LOAD_MESSAGES:
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    case actionTypes.FILTER_MESSAGES:
      return {
        ...state,
        items: state.items.filter((item) => item.message.includes(action.payload))
      };
    case actionTypes.SET_CHAT_ID:
      return {
        ...state,
        currentChatId: action.payload
      };
    default:
      return state;
  }
};

export default MessagesReducer;
