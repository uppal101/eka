import axios from 'axios';
import * as CONST from '../constants/constants';

const signupRequest = (props) => {
  const url ='/api/users';
  return acios.post(url, props).then(response => response.data);
}
export const signup = props => ({
  type: CONST.USER_SIGNUP,
  payload:signupRequest(props),
})