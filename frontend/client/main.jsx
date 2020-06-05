import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { App } from '../imports/ui/layouts/App';
import { store } from '../imports/api/store';
import { Auth0Provider } from '../imports/api/auth0-context';

Meteor.startup(() => {
  render((
    <Auth0Provider>
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  ), document.getElementById('react-target'));
});
