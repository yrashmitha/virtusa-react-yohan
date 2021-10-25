import React, { useState } from "react";
import { Container, Form, Modal, Table, Button } from "react-bootstrap";
import { users } from "./constants/data";

interface Props {}

const Assignment2 = (props: Props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  const handleClose = () => setShow(false);

  const handleClick = (index: number) => {
    const u = users[index];
    setName(u.name);
    setAge(u.age);
    setAddress(u.address);
    setShow(true);
  };

  return (
    <Container className="m-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u: any, index: number) => {
            return (
              <tr onClick={() => handleClick(index)}>
                <td>{index + 1}</td>
                <td>{u.name}</td>
                <td>{u.age}</td>
                <td>{u.address}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" value={name} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" value={address} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" value={age} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default Assignment2;
