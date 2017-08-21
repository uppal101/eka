import axios from 'axios';
import * as CONST from '../constants/constant';

const signupRequest = (props) => {
  const url ='https://eka-backend-challenge.herokuapp.com/api/users';
  return axios.post(url, props).then(response => response.data);
}
export const signup = props => ({
  type: CONST.USER_SIGNUP,
  payload:signupRequest(props),
})