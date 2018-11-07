import React, { Component } from 'react';
import ContactForm from './Form';
import ContactInfo from './Info';
import ContactSuccess from './Success';
import RootContainer from '../Root';
import { addContactData } from './firebase';

class ContactContainer extends Component {

  state = {
    contact_values: {},
    success: false
  }

  submit = e => {
    const { contact_values, success } = this.state;
    const { name, email, message } = e.target;
    e.preventDefault();
    name.value = "";
    email.value = "";
    message.value = "";
    addContactData(contact_values).then(doc => doc ? this.setState({ success: !success }) : null );
  }

  values = e => {
    const { contact_values } = this.state;
    const { name, value } = e.target;
    this.setState({ contact_values: {...contact_values, [name]: value} })
  }

  render() {
    return(
      <RootContainer>
        <h1>“CONTACT” PAGE TITLE</h1>
        <ContactForm submit={this.submit} values={this.values} />
        <ContactSuccess success={this.state.success} />
        <ContactInfo />
      </RootContainer>
    )
  }
}

export default ContactContainer;
