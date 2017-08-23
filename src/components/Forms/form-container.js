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

//const specialContainer = connect(mapStateToProps, mapDispatchToProps);

export const SignupPage1 = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'form1'
})(Form1));
export const SignupPage2 = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'form2'
})(Form2));
export const SignupPage3 = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'form3'
})(Form3));