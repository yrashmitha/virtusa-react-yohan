import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Table,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { ADD_NEW, DECREMENT, DELETE, INCREMENT, UPDATE } from "./store/actions";

interface Props {}

const Counter = (props: Props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState("");

  const handleClose = () => {
    if (editMode) {
      setEditMode(false);
    }
    setName("");
    setAddress("");
    setNumber("");
    setId("");
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const contacts = useSelector((state: any) => state.contacts);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch({
      type: ADD_NEW,
      user: {
        id: name + Date.now().toString(),
        name: name,
        address: address,
        number: number,
      },
    });

    handleClose();
  };

  const handleDelete = () => {
    dispatch({
      type: DELETE,
      user: {
        id: name + Date.now().toString(),
        name: name,
        address: address,
        number: number,
      },
    });

    handleClose();
  };

  const handleSubmitEdit = () => {
    console.log(id, name, address);
    dispatch({
      type: UPDATE,
      user: {
        id: id,
        name: name,
        address: address,
        number: number,
      },
    });

    handleClose();
  };

  const readyToEdit = (c: any) => {
    setEditMode(true);
    setName(c.name);
    setAddress(c.address);
    setNumber(c.number);
    setId(c.id.toString());
    handleShow();
  };
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="text-center m-5">
            <Button variant="primary" onClick={handleShow}>
              Add New
            </Button>
          </Col>
        </Row>
      </Container>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c: any) => {
            return (
              <tr key={c.id} onClick={() => readyToEdit(c)}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.address}</td>
                <td>{c.number}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control value={id} type="hidden" placeholder="Enter Name" />

          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
          />

          <Form.Label>Address</Form.Label>
          <Form.Control
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Enter Address"
          />

          <Form.Label>Number</Form.Label>
          <Form.Control
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            placeholder="Enter Age"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {editMode ? (
            <div>
              <Button variant="primary" onClick={handleSubmitEdit}>
                Update Changes
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          ) : (
            <Button variant="primary" onClick={handleSubmit}>
              Add
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Counter;
