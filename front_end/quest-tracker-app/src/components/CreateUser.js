import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { createUser } from '../api';

const CreateUser = ({ setUsers }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim()) {
      const newUser = await createUser(name);
      setUsers((prevUsers) => [...prevUsers, newUser]);
      setName('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Create a new user</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter user name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create User
      </Button>
    </Form>
  );
};

export default CreateUser;

