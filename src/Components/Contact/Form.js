import React from 'react';

const ContactForm = ({ submit, values }) => {
  return(
    <form onClick={submit}>
      <input type="text" name="name" onChange={values} />
      <input type="text" name="email" onChange={values} />
      <input type="text" name="message" onChange={values} />
      <button>Contact</button>
    </form>
  )
}

export default ContactForm;
