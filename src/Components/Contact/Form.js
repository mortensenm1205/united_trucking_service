import React from 'react';

const ContactForm = ({ submit, values }) => {
  return(
    <form onClick={submit}>
      <input type="text" name="name" placeholder="Name" onChange={values}  />
      <input type="text" name="email" placeholder="Email" onChange={values} />
      <input type="text" name="message" placeholder="Message" onChange={values} />
      <button>Contact</button>
    </form>
  )
}

export default ContactForm;
