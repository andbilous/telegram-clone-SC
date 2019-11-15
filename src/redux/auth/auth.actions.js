import axios from 'axios';
import { actionTypes } from './auth.types';
import { goToContactsPage, goToMessagesPage, goToProfilePage } from '../router/router.actions';

import { loadMessages } from '../messages/messages.actions';
import { loadChats } from '../chats/chats.actions';
import { loadContacts } from '../contacts/contacts.actions';
import LoginService from '../../services/LoginService';


export const submitForm = (credentials) => (dispatch) => {
  dispatch(submitFormStart());
  const loginService = new LoginService(credentials);
  loginService.submit().then(() => {
    axios.get(`http://localhost:3000/employees/${credentials.phone}`)
      .then((res) => {
        const userData = res.data;
        dispatch(loadContacts(userData.contacts));
        dispatch(loadMessages(userData.chats[0].messages));
        dispatch(loadChats(userData.chats));
        dispatch(goToProfilePage());
      });
  })
    .catch(() => {
        console.log(loginService.errors);
        dispatch(submitFormFailure(loginService.errors));
    });
};


const submitFormStart = () => ({
  type: actionTypes.SUBMIT_FORM_START
});

const submitFormSuccess = (data) => ({
  type: actionTypes.SUBMIT_FORM_SUCCESS,
  payload: data
});

const submitFormFailure = (errors) => ({
  type: actionTypes.SUBMIT_FORM_FAILURE,
  payload: errors
});
export default submitForm;
