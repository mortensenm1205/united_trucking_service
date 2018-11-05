import React, { Component } from 'react';
import ContactForm from './Form';
import ContactInfo from './Info';
import RootContainer from '../Root';

class ContactContainer extends Component {

  handleClick = e => {
    e.preventDefault();
  }

  render() {
    return(
      <RootContainer>
        <h1>“CONTACT” PAGE TITLE</h1>
        <ContactForm click={this.handleClick}/>
        <ContactInfo />
      </RootContainer>
    )
  }
}

export default ContactContainer;
