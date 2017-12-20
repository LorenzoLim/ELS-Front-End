import React, {Component} from 'react'
import { Form, Label, Input, FormGroup, Button } from 'reactstrap';

 class SignIn extends Component {
  render() {
    return(
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="managerEmail" placeholder="Enter your employee email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Please enter your password" />
        </FormGroup>
        <Button color="success">Sign In</Button>
      </Form>
    )
  }
}
export default SignIn
