import React from 'react';
import { ListGroup } from 'react-bootstrap';

const QuestList = ({ quests }) => {
  return (
    <ListGroup>
      {quests.map((quest) => (
        <ListGroup.Item key={quest.id}>{quest.title}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default QuestList;

