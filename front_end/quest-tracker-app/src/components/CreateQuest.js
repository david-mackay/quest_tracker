import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { createQuest } from '../api';

const CreateQuest = ({ users, activeUserId, setActiveUserId, setQuests }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('active');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newQuest = await createQuest(activeUserId, title, status);
      setQuests((prevQuests) => [...prevQuests, newQuest]);
      setTitle('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Create a new quest</Form.Label>
        <Form.Control
          as="select"
          value={activeUserId}
          onChange={(e) => setActiveUserId(Number(e.target.value))}
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </Form.Control>
        <Form.Control
          type="text"
          placeholder="Enter quest title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.Control as="select" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="completed">Completed</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Create Quest
      </Button>
    </Form>
  );
};

export default CreateQuest;

