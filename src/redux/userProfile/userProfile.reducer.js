import actionTypes from './userProfile.types';

const initialState = {
  data: {}
};
const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PROFILE_DATA:
      return {
        ...state,
        data: action.payload
      };
    case actionTypes.SET_NAME:
      return {
        ...state,
        data: Object.assign(state.data, { name: action.payload })
      };
    case actionTypes.SET_PHONE:
      return {
        ...state,
        data: Object.assign(state.data, { phone: action.payload })
      };
    default:
      return state;
  }
};
export default userProfileReducer;
