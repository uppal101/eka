import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { userSignup } from './users-reducer'

const eka = combineReducers({
  form: formReducer,
  userSignup,
})

export default eka;