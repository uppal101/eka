import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {signup} from '../../actions/user-actions'
import { required, number, renderField } from '../helpers/validations';


let SignupForm3 = (props) => {
  const { handleSubmit } = props
  return (
     <Grid centered columns={2}>
        <Grid.Column className="home">
          <Form className="forms" onSubmit={ handleSubmit }>
            <Form.Field inline>
               <Field 
                name="streetAddress" 
                component={renderField}
                type="text" 
                placeholder="Street Address"
                label="Street Address"
                validate={[required]}
              />
            </Form.Field>

            <Form.Field inline>
               <Field 
                name="city" 
                component={renderField}
                type="text" 
                placeholder="City"
                label="City"
                validate={[required]}
              />
            </Form.Field>

             <Form.Field inline>
               <Field 
                name="state" 
                component={renderField} 
                type="text" 
                placeholder="State"
                label="State"
                validate={[required]}
              />
            </Form.Field>

             <Form.Field inline>
               <Field 
                name="zip" 
                component={renderField} 
                type="text" 
                placeholder="Zip Code"
                label="Zip Code"
                pattern="[0-9]{5}"
                validate={[required, number]}
              />
            </Form.Field>

            <Link to={'/'}>
              <Button type="submit">Save</Button>
            </Link>
          </Form>
        </Grid.Column>
      </Grid>
    
  )
}

SignupForm3 = reduxForm({
  form: 'form3'
})(SignupForm3)

const mapStateToProps = (state, ownProps) => {
 return {
  userSignup: state.userSignup
 }
}

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators({signup}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm3)