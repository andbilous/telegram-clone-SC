import axios from 'axios';
import { actionTypes } from './auth.types';
import { goToProfilePage } from '../router/router.actions';
import { loadChats } from '../chats/chats.actions';
import { loadContacts } from '../contacts/contacts.actions';
import { loadProfileData } from '../userProfile/userProfile.actions';
import LoginService from '../../services/LoginService';


export const submitForm = (credentials) => (dispatch) => {
  dispatch(submitFormStart());
  const loginService = new LoginService(credentials);
  loginService.submit().then(() => {
    axios.get(`http://localhost:3000/employees/${credentials.phone}`)
      .then((res) => {
        dispatch(submitFormSuccess());
        const userData = res.data;
        dispatch(loadContacts(userData.contacts));
          dispatch(loadChats(userData.chats));
        dispatch(loadProfileData(userData.profile));
        dispatch(goToProfilePage());
      }).catch(() => {
        dispatch(submitFormFailure('Error'));
      });
  })
    .catch(() => {
      dispatch(submitFormFailure('Error'));
    });
};


const submitFormStart = () => ({
  type: actionTypes.SUBMIT_FORM_START
});

const submitFormSuccess = () => ({
  type: actionTypes.SUBMIT_FORM_SUCCESS,
});

const submitFormFailure = (error) => ({
  type: actionTypes.SUBMIT_FORM_FAILURE,
  payload: error
});
export default submitForm;
