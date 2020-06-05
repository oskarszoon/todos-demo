import React from 'react';
import { Row, Col } from 'reactstrap';
import { Header } from '../components/Header.jsx';
import { TodosList } from '../components/TodosList.jsx';

export const App = () => {
  return (
    <>
      <Header />
      <main role="main" className="container">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <TodosList />
          </Col>
        </Row>
      </main>
    </>
  );
};
