import React, { useContext } from 'react';
import { Jumbotron, Button } from 'reactstrap';

import { Header } from '../components/Header.jsx';
import { LoadingIndicator } from '../components/LoadingIndicator.jsx';
import { Todos } from '../pages/Todos';
import { Auth0Context } from '../../api/auth0-context';

export const App = () => {
  const auth0 = useContext(Auth0Context);
  const { isLoading, isAuthenticated } = auth0;

  let content = <LoadingIndicator />;
  if (!isLoading) {
    if (isAuthenticated) {
      content = (<Todos />);
    } else {
      content = (
        <Jumbotron>
          <h1 className="display-3">Welcome</h1>
          <p className="lead">This is a sample todos application created for a tech assignment and as a learning exercise.</p>
          <hr className="my-2" />
          <p>
            Backend built as simple REST Apis using
            {' '}
            <a href="https://lumen.laravel.com/" target="__blank">Lumen</a>
            {' '}
            .
          </p>
          <p>
            Frontend built with
            {' '}
            <a href="https://www.meteor.com/" target="__blank">Meteor</a>
            {' '}
            & React+Redux
          </p>
          <p>
            More information and all code available at&nbsp;
            <a href="https://github.com/oskarszoon/todos-demo" target="__blank">github.com/oskarszoon/todos-demo</a>
          </p>
          <hr className="my-2" />
          <Button color="link" onClick={auth0.loginWithRedirect}>Please sign in to start using it</Button>
        </Jumbotron>
      );
    }
  }

  return (
    <>
      <Header />
      <main role="main" className="container">
        {content}
      </main>
    </>
  );
};
