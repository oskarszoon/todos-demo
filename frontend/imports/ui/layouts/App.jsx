import React from 'react';
import { Navbar } from '../pages/Navbar.jsx';
import { TodosList } from '../pages/TodosList.jsx';

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
