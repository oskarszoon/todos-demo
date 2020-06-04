import React from 'react';
import { Navbar } from '../components/Navbar.jsx';
import { TodosList } from '../components/TodosList.jsx';

export const App = () => {
  return (
    <>
      <Navbar />
      <main role="main" className="container">
        <TodosList />
      </main>
    </>
  );
};
