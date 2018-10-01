import React from 'react';

const ContactForm = props => {
  const { click } = props;
  return(
    <form onClick={click}>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button>Contact</button>
    </form>
  )
}

export default ContactForm;
