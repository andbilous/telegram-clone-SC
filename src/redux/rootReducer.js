import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import routerReducer from './router/router.reducer';
import contactsReducer from './contacts/contacts.reducer';
import chatsReducer from './chats/chats.reducer';
import messagesReducer from './messages/messages.reducer';
import userProfileReducer from './userProfile/userProfile.reducer';

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  authReducer, routerReducer, contactsReducer, chatsReducer, messagesReducer, userProfileReducer
});
