import React, { Component } from "react";
import ContactForm from "./Form";
import ContactInfo from "./Info";
import ContactSuccess from "./Success";
import RootContainer from "../Root";
import { addContactData } from "./firebase/";

class ContactContainer extends Component {
  state = {
    contact_values: {},
    success: false
  };

  submit = e => {
    const { contact_values, success } = this.state;
    e.preventDefault();
    e.target.reset();
    addContactData(contact_values).then(doc =>
      doc ? this.setState({ success: !success }) : null
    );
  };

  values = e => {
    const { contact_values } = this.state;
    const { name, value } = e.target;
    this.setState({ contact_values: { ...contact_values, [name]: value } });
  };

  render() {
    const { success } = this.state;
    return (
      <RootContainer>
        <h1>“CONTACT” PAGE TITLE</h1>
        <ContactForm submit={this.submit} values={this.values} />
        <ContactSuccess success={success} />
        <ContactInfo />
      </RootContainer>
    );
  }
}

export default ContactContainer;
