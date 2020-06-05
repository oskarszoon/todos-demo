import React from 'react';
import { Row, Col } from 'reactstrap';
import { TodosList } from '../components/TodosList.jsx';

export const Todos = () => {
  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <TodosList />
      </Col>
    </Row>
  );
};
