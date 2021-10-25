import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { User } from "../Layout";

interface Props {
  clickHandler: (params: User) => void;
}

export const ContactForm = (props: Props) => {
  const [fName, setfName] = useState("");
  const [lName, setLName] = useState("");
  const [age, setAge] = useState("");

  const handleClick = () => {
      props.clickHandler({
          firstName : fName,
          lastName : lName,
          age : parseInt(age)
      })
      setfName("");
      setLName("");
      setAge("")
  }

  
  return (
    <Container>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          onChange={(e) => setfName(e.target.value)}
          type="text"
          value={fName}
          placeholder="Enter First Name"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setLName(e.target.value)}
          value={lName}
          placeholder="Enter Last Name"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          placeholder="Enter Age"
        />
      </Form.Group>
      <Button variant="primary" onClick={handleClick}>
        Add
      </Button>
    </Container>
  );
};
