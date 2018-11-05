import React, { Component } from 'react';
import ContactForm from './Form';
import ContactInfo from './Info';
import RootContainer from '../Root';

class ContactContainer extends Component {

  state = {
    contact_values: {}
  }

  submit = e => {
    e.preventDefault();
    console.log(this.state.contact_values);
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
        <ContactInfo />
      </RootContainer>
    )
  }
}

export default ContactContainer;
