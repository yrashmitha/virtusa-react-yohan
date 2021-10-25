import React, { useState } from "react";
import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import { User } from "../Layout";

interface Props {
  users: Array<User>;
  onDelete: (index: number) => void;
  onUpdate: (index: number, user: User) => void;
}

export const UserList = (props: Props) => {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  const [fName, setfName] = useState("fname");
  const [lName, setLName] = useState("lname");
  const [age, setAge] = useState("1");

  const [showView, setShowView] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseView = () => setShowView(false);

  const handleShow = () => setShow(true);
  const handleShowView = () => setShowView(true);

  const submit = () => {
    let user: User = {
      firstName: fName,
      lastName: lName,
      age: parseInt(age),
    };
    props.onUpdate(index, user);
    handleClose();
  };

  const tableHeader = (
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Actions</th>
      </tr>
    </thead>
  );

  const handleUpdate = (index: number, user: User) => {
    console.log(user);
    setfName(user.firstName);
    setLName(user.lastName);
    setAge(user.age.toString());
    setIndex(index);
    handleShow();
  };

  const handleView = (index: number, user: User) => {
    setfName(user.firstName);
    setLName(user.lastName);
    setAge(user.age.toString());
    // setIndex(index);
    handleShowView();
  };

  const tableBody = props.users.map((e, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{e.firstName}</td>
        <td>{e.lastName}</td>
        <td>{e.age}</td>
        <td>
          <Button
            onClick={() => handleView(index, e)}
            className="ms-3"
            variant="secondary"
          >
            View
          </Button>
          <Button
            onClick={() => handleUpdate(index, e)}
            className="ms-3"
            variant="info"
          >
            Update
          </Button>
          <Button
            onClick={() => props.onDelete(index)}
            className="ms-3"
            variant="danger"
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <Container className="my-3">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={submit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showView} onHide={handleCloseView}>
        <Modal.Header closeButton>
          <Modal.Title>View Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={fName}
              placeholder="Enter First Name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              value={lName}
              placeholder="Enter Last Name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" value={age} placeholder="Enter Age" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleCloseView}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Table striped bordered hover>
        {tableHeader}
        <tbody>{tableBody}</tbody>
      </Table>
    </Container>
  );
};
