import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signup} from '../../actions/user-actions';
import Form1 from './form1';
import Form2 from './form2';
import Form3 from './form3';

const mapStateToProps = (state, ownProps) => {
 return {
  userSignup: state.userSignup
 }
};

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators({signup}, dispatch)
};

const specialContainer = connect(mapStateToProps, mapDispatchToProps);

export const SignupPage1 = specialContainer(Form1);
export const SignupPage2 = specialContainer(Form2);
export const SignupPage3 = specialContainer(Form3);