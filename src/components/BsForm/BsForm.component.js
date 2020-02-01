import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function BsFormComp() {
   const [form, setForm] = useState({
      email: { value: "marlon@gmail.com" },
      password: { value: "password1" }
   });

   const setFormFieldVal = (name, event) => {
      let myForm = { ...form };
      myForm[name].value = event.currentTarget.value;
      setForm(myForm);
   };

   const logFormDataHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
      console.log(form);
   };

   return (
      <div>
         <Form onSubmit={logFormDataHandler}>
            <Form.Group>
               <Form.Label>Email</Form.Label>
               <Form.Control type="email" placeholder="Email" value={form['email'].value} onChange={setFormFieldVal.bind(this, 'email')}></Form.Control>
            </Form.Group>
            <Form.Group>
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" minLength="6" value={form['password'].value} onChange={setFormFieldVal.bind(this, 'password')}></Form.Control>
            </Form.Group>
            <Button type="Submit">Submit</Button>
         </Form>
      </div>
   );
}
