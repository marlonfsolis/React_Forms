import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

export default function ReactHookFormComp() {
   const { register, handleSubmit, watch, errors } = useForm();
   const onSubmitHandler = data => {
      console.log(data);
   };

   return (
      <React.Fragment>
         <div style={{ width: "80%" }}>
            <Form onSubmit={handleSubmit(onSubmitHandler)}>
               <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="email" ref={register} />
                  <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
               </Form.Group>

               <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" ref={register({ minLength: 6 })} />
               </Form.Group>
               <Button variant="primary" type="submit">
                  Submit
               </Button>
            </Form>
         </div>
      </React.Fragment>
   );
}
