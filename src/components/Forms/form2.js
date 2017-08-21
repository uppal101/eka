import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {signup} from '../../actions/user-actions'
import { required, number, renderField } from '../helpers/validations';


let SignUpForm2 = (props) => {
  const { handleSubmit } = props
  return (
     <Grid centered columns={2}>
        <Grid.Column className="home">
          <Form className="forms" onSubmit={ handleSubmit }>
            <Form.Field inline>
               <Field 
                name="firstName" 
                component={renderField}
                type="text" 
                placeholder="First name"
                label="First name"
                validate={[required]}
              />
            </Form.Field>

            <Form.Field inline>
               <Field 
                name="lastName" 
                component={renderField}
                type="text" 
                placeholder="Last Name"
                label="Last Name"
                validate={[required]}
              />
            </Form.Field>

             <Form.Field inline>
               <Field 
                name="phoneNumber" 
                component={renderField} 
                type="tel" 
                placeholder="Phone Number"
                label="Phone Number"
                validate={[required, number]}
              />
            </Form.Field>
            <Link to={'/signup3'}>
              <Button type="submit">Save</Button>
            </Link>
          </Form>
        </Grid.Column>
      </Grid>
    
  )
}

SignUpForm2 = reduxForm({
  form: 'form2'
})(SignUpForm2)

const mapStateToProps = (state, ownProps) => {
 return {
  userSignup: state.userSignup
 }
}

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators({signup}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm2)