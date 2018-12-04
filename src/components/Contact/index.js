import React, { Component } from "react";
import { Contact } from "./contact_css";
import ContactForm from "./Form";
import ContactInfo from "./Info";
import ContactSuccess from "./Success";
import ContactImage from "./Image";
import { addContactData } from "./firebase/";
import { downloadImage } from "../../repeats/Image";

class ContactContainer extends Component {
  state = {
    contact_values: {},
    success: false,
    contactImageURL: ""
  };

  componentDidMount() {
    downloadImage(this.props.location.pathname).then(url => (
      this.setState({ contactImageURL: url })
    ))
  }


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
    const { location } = this.props;
    const { success, contactImageURL } = this.state;
    return (
      <Contact>
        <h1>Contact Us</h1>
        <ContactInfo />
        <ContactForm submit={this.submit} values={this.values} />
        <ContactSuccess success={success} />
        <ContactImage url={contactImageURL} location={location} />
      </Contact>
    );
  }
}

export default ContactContainer;
