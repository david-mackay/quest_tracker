import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import CreateUser from './components/CreateUser';
import CreateQuest from './components/CreateQuest';
import QuestList from './components/QuestList';
import { getUsers, getUserQuests } from './api';

function App() {
  const [users, setUsers] = useState([]);
  const [quests, setQuests] = useState([]);
  const [activeUserId, setActiveUserId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  try {
    const usersData = await getUsers();
    setUsers(usersData);
    setActiveUserId(usersData[0].id);

    const questsData = await getUserQuests(activeUserId);
    setQuests(questsData);
  } catch (error) {
    console.error(error);
  }
};

  const filterQuests = (status) => {
    return quests.filter(
      (quest) => quest.user_id === activeUserId && quest.status === status
    );
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Quest Tracker</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <CreateUser setUsers={setUsers} />
        </Col>
      </Row>
      <Row>
        <Col>
          <CreateQuest
            users={users}
            activeUserId={activeUserId}
            setActiveUserId={setActiveUserId}
            setQuests={setQuests}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs defaultActiveKey="active">
            <Tab eventKey="active" title="Active Quests">
              <QuestList quests={filterQuests('active')} />
            </Tab>
            <Tab eventKey="inactive" title="Inactive Quests">
              <QuestList quests={filterQuests('inactive')} />
            </Tab>
            <Tab eventKey="completed" title="Completed Quests">
              <QuestList quests={filterQuests('completed')} />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
