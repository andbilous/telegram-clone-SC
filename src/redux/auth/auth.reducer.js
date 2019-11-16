import { actionTypes } from './auth.types';

const initialValues = {
  isLoading: false,
  error: ''
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
      };
    case actionTypes.SUBMIT_FORM_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default: return state;
  }
};
export default authReducer;
