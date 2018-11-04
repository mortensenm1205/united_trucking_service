import React, { Component } from 'react';
import ContactForm from './Form';
import ContactInfo from './Info';

class ContactContainer extends Component {

  handleClick = e => {
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <h1>I am the Contact Portion</h1>
        <ContactForm click={this.handleClick}/>
        <ContactInfo />
      </div>
    )
  }
}

export default ContactContainer;
