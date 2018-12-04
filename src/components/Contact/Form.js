import React from 'react';
import { Form, Label, Input, Button } from './contact_css';

const ContactForm = ({ submit, values }) => {
  return (
    <Form onSubmit={submit}>
      <Label> Name:
        <Input type="text" name="name" onChange={values} required />
      </Label>
      <Label> Email:
        <Input type="email" name="email" onChange={values} required />
      </Label>
      <Label> Message:
        <Input type="text" name="message" onChange={values} required />
      </Label>
      <Button>Contact</Button>
    </Form>
  )
}

export default ContactForm;
