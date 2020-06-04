import React from 'react';
import { Navbar } from '../components/Navbar.jsx';
import { TodosList } from '../components/TodosList.jsx';

export const App = () => {
  return (
    <div>
      <Navbar />
      <main role="main" className="container">
        <TodosList />
      </main>
    </div>
  );
};
