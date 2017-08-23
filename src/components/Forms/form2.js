import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Grid } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import { required, number, renderField } from '../helpers/validations';


class SignUpForm2 extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      redirect: false
    }
  }
  
  submit(values) {
    this.props.signup(values)
    this.props.history.push('/signup3')
    this.setState({redirect: true})
  }
  
  render () {
    return (
     <Grid centered columns={2}>
        <Grid.Column className="home">
          <Form className="forms" onSubmit={ this.props.handleSubmit(this.props.submit) }>
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
              <Button type="submit">Save</Button>
          </Form>
          {this.state.redirect && (<Redirect to={'/signup3'}/>)}
        </Grid.Column>
      </Grid> 
    )
  }
  
}

//SignUpForm2 = reduxForm({
//  form: 'form2'
//})(SignUpForm2)


export default SignUpForm2