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
        items: state.items.filter((message) => message.id !== action.payload)
      };
    case actionTypes.LOAD_MESSAGES:
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    case actionTypes.FETCH_MESSAGES_REQUEST:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};

export default MessagesReducer;
