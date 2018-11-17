import React from 'react';

const ContactForm = ({ submit, values }) => {
  return(
    <form onSubmit={submit}>
      <input type="text" name="name" onChange={values} required/>
      <input type="email" name="email" onChange={values} required/>
      <input type="text" name="message" onChange={values} required/>
      <button>Contact</button>
    </form>
  )
}

export default ContactForm;
