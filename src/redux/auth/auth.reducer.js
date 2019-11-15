import { actionTypes } from './auth.types';

const initialValues = {
  isLoading: false,
  isLoggedIn: false,
  errors: []
};

const authReducer = (state = initialValues, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_FORM_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
      };
    case actionTypes.SUBMIT_FORM_FAILURE:
      return {
        ...state,
        errors: action.payload,
        isLoading: false,
      };
    default: return state;
  }
};
export default authReducer;
