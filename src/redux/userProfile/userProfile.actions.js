import actionTypes from './userProfile.types';


export const loadProfileData = (data) => ({
  type: actionTypes.LOAD_PROFILE_DATA,
  payload: data
});

export const setName = (name) => ({
  type: actionTypes.SET_NAME,
  payload: name
});

export const setPhone = (phone) => ({
  type: actionTypes.SET_PHONE,
  payload: phone
});
