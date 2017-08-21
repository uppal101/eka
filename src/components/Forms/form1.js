import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {signup} from '../../actions/user-actions'
import { required, minValue7, email, renderField } from '../helpers/validations';


let SignupForm = (props) => {
  const { handleSubmit } = props
  return (
    <Form className="forms" onSubmit={ handleSubmit }>
      <Form.Field inline>
         <Field 
          name="username" 
          component={renderField}
          type="text" 
          placeholder="Username"
          label="Username"
          validate={[required]}
        />
      </Form.Field>
    
      <Form.Field inline>
         <Field 
          name="email" 
          component={renderField}
          type="email" 
          placeholder="Email"
          label="Email"
          validate={[required, email]}
        />
      </Form.Field>

       <Form.Field inline>
         <Field 
          name="password" 
          component={renderField} 
          type="password" 
          placeholder="Password"
          label="Password"
          validate={[required, minValue7]}
        />
      </Form.Field>
      <Link to={'/signup2'}>
        <Button type="submit">Save</Button>
      </Link>
    </Form>
  )
}

SignupForm = reduxForm({
  form: 'form1'
})(SignupForm)

const mapStateToProps = (state, ownProps) => {
 return {
  userSignup: state.userSignup
 }
}

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators({signup}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)