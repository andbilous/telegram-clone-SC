import { pageTypes, actionTypes } from './router.types';


const initialValues = {
  currentPage: pageTypes.AUTH
};

const routerReducer = ((state = initialValues, action) => {
  switch (action.type) {
    case actionTypes.GO_TO_CONTACTS_PAGE:
      return {
        ...state,
        currentPage: pageTypes.CONTACTS
      };
    case actionTypes.GO_TO_CHATS_PAGE:
      return {
        ...state,
        currentPage: pageTypes.CHATS
      };
    case actionTypes.GO_TO_MESSAGES_PAGE:
      return {
        ...state,
        currentPage: pageTypes.MESSAGES
      };
    case actionTypes.GO_TO_PROFILE_PAGE:
      return {
        ...state,
        currentPage: pageTypes.PROFILE
      };
    case actionTypes.GO_TO_AUTH_PAGE:
      return {
        ...state,
        currentPage: pageTypes.AUTH
      };
    default:
      return state;
  }
});
export default routerReducer;
