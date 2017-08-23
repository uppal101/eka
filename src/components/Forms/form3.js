import React from 'react';
<<<<<<< HEAD
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Grid } from 'semantic-ui-react';
import { required, number, renderField } from '../helpers/validations';


class SignupForm3 extends React.Component {
  constructor(props){
    super(props)
    this.submit = this.submit.bind(this);
  }
  
  submit(values) {
    this.props.signup(values)
    this.props.history.push('/')
  }
  
  render () {
    return (
     <Grid centered columns={2}>
        <Grid.Column className="home">
          <Form className="forms" onSubmit={ this.props.handleSubmit(this.props.submit) }>
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
              <Button type="submit">Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    
    )
  } 
}

//SignupForm3 = reduxForm({
//  form: 'form3'
//})(SignupForm3)


export default SignupForm3
