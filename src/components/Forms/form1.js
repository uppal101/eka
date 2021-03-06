import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Grid } from 'semantic-ui-react';
import { required, minValue7, email, renderField } from '../helpers/validations';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  
  submit(values) {
    this.props.signup(values)
    this.props.history.push('/signup2')
  }
  
  render () {
    return (
        <Grid centered columns={2}>
          <Grid.Column className="home">
            <Form className="forms" onSubmit={ this.props.handleSubmit(this.props.submit) }>
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
                <Button type="submit">Save</Button>
            </Form>
          </Grid.Column>
        </Grid>

    )
  }
  
}
//
//SignupForm = reduxForm({
//  form: 'form1'
//})(SignupForm)


export default SignupForm
