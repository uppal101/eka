import * as CONST from '../constants/constant';

export const userSignup = (state = { status: false }, action) => {
  switch (action.type) {
    case CONST.USER_SIGNUP_PENDING:
      return state;
    case CONST.USER_SIGNUP_FULFILLED:
      return Object.assign( {}, { status: true }, action.payload);
    case CONST.USER_SIGNUP_REJECTED:
      return Object.assign({}, { status: false, error: 'Please check that you have filled out all the required fields' }, action.payload);
    default:
      return state; 
  }
}